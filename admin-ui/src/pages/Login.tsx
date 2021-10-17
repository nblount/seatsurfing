import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import {
  Redirect
} from "react-router-dom";
import './Login.css';
import { Organization, AuthProvider, Ajax, JwtDecoder } from 'flexspace-commons';
import { withTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

interface State {
  email: string
  password: string
  invalid: boolean
  redirect: string | null
  requirePassword: boolean
  providers: AuthProvider[] | null
}

interface Props {
  t: TFunction
}

class Login extends React.Component<Props, State> {
  org: Organization | null;

  constructor(props: any) {
    super(props);
    this.org = null;
    this.state = {
      email: "",
      password: "",
      invalid: false,
      redirect: null,
      requirePassword: false,
      providers: null
    };
  }

  onSubmit = (e: any) => {
    e.preventDefault();
    let email = this.state.email.split("@");
    if (email.length !== 2) {
      // Error
      return;
    }
    let payload = {
      email: this.state.email
    };
    Ajax.postData("/auth/preflight", payload).then((res) => {
      this.org = new Organization();
      this.org.deserialize(res.json.organization);
      this.setState({
        providers: res.json.authProviders,
        requirePassword: res.json.requirePassword
      });
    }).catch((e) => {
      this.setState({
        invalid: true
      });
    });
  }

  onPasswordSubmit = (e: any) => {
    e.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password,
      longLived: false
    };
    Ajax.postData("/auth/login", payload).then((res) => {
      let jwtPayload = JwtDecoder.getPayload(res.json.accessToken);
      if (!jwtPayload.admin) {
        this.setState({
          invalid: true
        });
        return;
      }
      Ajax.CREDENTIALS = {
        accessToken: res.json.accessToken,
        refreshToken: res.json.refreshToken,
        accessTokenExpiry: new Date(new Date().getTime() + Ajax.ACCESS_TOKEN_EXPIRY_OFFSET)
      };
      Ajax.PERSISTER.updateCredentialsSessionStorage(Ajax.CREDENTIALS).then(() => {
        this.setState({
          redirect: "/dashboard"
        });
      });
    }).catch((e) => {
      this.setState({
        invalid: true
      });
    });
  }

  cancelPasswordLogin = (e: any) => {
    e.preventDefault();
    this.setState({
      requirePassword: false,
      providers: null,
      invalid: false
    });
  }

  renderAuthProviderButton = (provider: AuthProvider) => {
    return (
      <p key={provider.id}>
        <Button variant="primary" className="btn-auth-provider" onClick={() => this.useProvider(provider)}>{provider.name}</Button>
      </p>
    );
  }

  useProvider = (provider: AuthProvider) => {
    let target = Ajax.getBackendUrl() + "/auth/" + provider.id + "/login/web";
    window.location.href = target;
  }

  render() {
    if (this.state.redirect != null) {
      return <Redirect to={this.state.redirect} />
    }

    if (this.state.requirePassword) {
      return (
        <div className="container-signin">
          <Form className="form-signin" onSubmit={this.onPasswordSubmit}>
            <img src="./seatsurfing.svg" alt="Seatsurfing" className="logo" />
            <p>{this.props.t("signinAsAt", { user: this.state.email, org: this.org?.name })}</p>
            <InputGroup>
              <Form.Control type="password" placeholder={this.props.t("password")} value={this.state.password} onChange={(e: any) => this.setState({ password: e.target.value, invalid: false })} required={true} isInvalid={this.state.invalid} minLength={8} autoFocus={true} />
              <InputGroup.Append>
                <Button variant="primary" type="submit">&#10148;</Button>
              </InputGroup.Append>
            </InputGroup>
            <Form.Control.Feedback type="invalid">{this.props.t("errorInvalidPassword")}</Form.Control.Feedback>
            <Button variant="secondary" className="btn-auth-provider btn-back" onClick={this.cancelPasswordLogin}>{this.props.t("back")}</Button>
          </Form>
        </div>
      );
    }

    if (this.state.providers != null) {
      let buttons = this.state.providers.map(provider => this.renderAuthProviderButton(provider));
      let providerSelection = <p>{this.props.t("signinAsAt", { user: this.state.email, org: this.org?.name })}</p>;
      if (buttons.length === 0) {
        providerSelection = <p>{this.props.t("errorNoAuthProviders")}</p>
      }
      return (
        <div className="container-signin">
          <Form className="form-signin">
            <img src="./seatsurfing.svg" alt="Seatsurfing" className="logo" />
            {providerSelection}
            {buttons}
            <Button variant="secondary" className="btn-auth-provider" onClick={() => this.setState({ providers: null })}>{this.props.t("back")}</Button>
          </Form>
        </div>
      );
    }

    return (
      <div className="container-signin">
        <Form className="form-signin" onSubmit={this.onSubmit}>
          <img src="./seatsurfing.svg" alt="Seatsurfing" className="logo" />
          <h3>{this.props.t("mangageOrgHeadline")}</h3>
          <InputGroup>
            <Form.Control type="email" placeholder={this.props.t("emailAddress")} value={this.state.email} onChange={(e: any) => this.setState({ email: e.target.value, invalid: false })} required={true} isInvalid={this.state.invalid} autoFocus={true} />
            <InputGroup.Append>
              <Button variant="primary" type="submit">&#10148;</Button>
            </InputGroup.Append>
          </InputGroup>
          <Form.Control.Feedback type="invalid">{this.props.t("errorInvalidEmail")}</Form.Control.Feedback>
        </Form>
        <p className="copyright-footer">&copy; Seatsurfing &#183; Version {process.env.REACT_APP_PRODUCT_VERSION}</p>
      </div>
    );
  }
}

export default withTranslation()(Login as any);
