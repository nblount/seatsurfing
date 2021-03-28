import { Formatting } from 'flexspace-commons';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
    de: {
        translation: {
            "weweaveUG": "weweave UG (haftungsbeschränkt)",
            "privacy": "Datenschutz",
            "imprint": "Impressum",
            "findYourPlace": "Finde Deinen Platz.",
            "emailPlaceholder": "max@mustermann.de",
            "getStarted": "Loslegen",
            "back": "Zurück",
            "errorInvalidEmail": "Ungültige E-Mail-Adresse.",
            "errorLogin": "Fehler bei der Anmeldung. Möglicherweise ist diese E-Mail-Adresse nicht mit einer Organisation verknüpft.",
            "errorNoAuthProviders": "Für diesen Nutzer stehen keine Anmelde-Möglichkeiten zur Verfügung.",
            "errorInvalidPassword": "Ungültiges Kennwort.",
            "password": "Kennwort",
            "signin": "Anmelden",
            "signinAsAt": "Als {{user}} an {{org}} anmelden:",
            "enter": "Beginn", 
            "leave": "Ende",
            "area": "Bereich",
            "errorBookingLimit": "Das Limit von {{num}} Buchungen wurde erreicht.",
            "errorPickArea": "Bitte einen Bereich auswählen.",
            "errorEnterFuture": "Der Beginn muss in der Zukunft liegen.",
            "errorLeaveAfterEnter": "Das Ende muss nach dem Beginn liegen.",
            "errorDaysAdvance": "Die Buchung darf maximal {{num}} Tage in der Zukunft liegen.",
            "errorBookingDuration": "Die maximale Buchungsdauer beträgt {{num}} Stunden.",
            "searchSpace": "Plätze suchen",
            "pleaseSelect": "bitte wählen",
            "signout": "Abmelden",
            "bookSeat": "Platz buchen",
            "myBookings": "Meine Buchungen",
            "loadingHint": "Daten werden geladen...",
            "space": "Platz",
            "confirmBooking": "Buchung bestätigen",
            "cancel": "Abbrechen",
            "bookingConfirmed": "Deine Buchung wurde bestätigt!",
            "cancelBooking": "Buchung stornieren",
            "confirmCancelBooking": "Buchung für {{enter}} stornieren?",
            "noBookings": "Keine Buchungen gefunden.",
            "createAccount": "Kostenlosen Account erstellen",
            "errorConfluenceClientIdUnknown": "Lass uns loslegen.",
            "confluenceClientIdHint": "Willkommen bei Seatsurfing! Damit diese App mit Confluence funktioniert, müssen wir zuerst Deine Confluence-Instanz mit Deinem Seatsurfing-Account verknüpfen. Bitte folge diesen Schritten:",
            "confluenceClientIdStep1": "Erstelle einen kostenlosen Seatsurfing-Account.",
            "confluenceClientIdStep2": "Logge Dich in die Administrator-Oberfläche ein.",
            "confluenceClientIdStep3": "Navigiere zu 'Einstellungen'.",
            "confluenceClientIdStep4": "Kopiere die folgende ID:",
            "confluenceClientIdStep5": "Füge diese ID als 'Confluence Client ID' ein und speichere die Einstellungen.",
            "confluenceClientIdStep6": "Lade diese Seite neu.",
            "confluenceClientIdHint2": "Brauchst Du Hilfe?",
            "confluenceClientIdHint3": "Wir freuen uns, Dich zu unterstützen.",
            "errorLoginFailed": "Login fehlgeschlagen.",
            "loginFailedDescription": "Möglicherweise ist das verwendete Konto nicht für diese Organisation freigeschaltet.",
            "mergeUserAccounts": "Konten zusammenführen",
            "mergeUserAccountsHint": "Du kannst diesen Seatsurfing Benutzer-Account für Deinen Confluence-User mit deinem regulären Seatsurfing-Konto zusammenführen. Das ermöglicht es Dir, die mobile App und die Confluence-Integration gleichermaßen zur Verwaltung Deiner Buchungen zu nutzen. Gib die E-Mail-Adresse Deines regulären Benutzerkontos ein, um loszulegen.",
            "requestMerge": "Zusammenführen anfragen",
            "mergeUserAccountsNextStepHint": "Geschafft! Noch ein Schritt: Melde Dich mit Deinem regulären Seatsurfing-Benutzerkonto in der Web-App an und bestätige binnen einer Stunde die Anfrage zum Zusammenführen Deiner Accounts.",
            "openWebUI": "Web-App öffnen",
            "accept": "Annehmen",
            "introIncomingMergeRequests": "Du hast eingehende Anfragen zum Zusammenführen von Benutzerkonten. Nimm sie nur an, wenn Du die Anfrage initiiert hast.",
            "errorConfluenceAnonymous": "Nicht autorisiert.",
            "confluenceAnonymousHint": "Bitte logge Dich in Confluence ein, um die Seatsurfing für Confluence zu nutzen.",
        }
    },
    en: {
        translation: {
            "weweaveUG": "weweave UG (limited liability)",
            "privacy": "Privacy",
            "imprint": "Imprint",
            "findYourPlace": "Find your space.",
            "emailPlaceholder": "you@company.com",
            "getStarted": "Get started",
            "back": "Back",
            "errorInvalidEmail": "Invalid email address.",
            "errorLogin": "An error occurred while signing you in. Your email address might not be associated with an organization.",
            "errorNoAuthProviders": "No authentication providers for your user.",
            "errorInvalidPassword": "Invalid password.",
            "password": "Password",
            "signin": "Sign in",
            "signinAsAt": "Sign is as {{user}} at {{org}}:",
            "enter": "Enter", 
            "leave": "Leave",
            "area": "Area",
            "errorBookingLimit": "You've reached the limit of {{num}} bookings.",
            "errorPickArea": "Please pick an area.",
            "errorEnterFuture": "Enter date must be in the future.",
            "errorLeaveAfterEnter": "Leave date must be after enter date.",
            "errorDaysAdvance": "Your booking must not be more than {{num}} days in advance.",
            "errorBookingDuration": "The maximum booking duration is {{num}} hours.",
            "searchSpace": "Find a space",
            "pleaseSelect": "please choose",
            "signout": "Sign off",
            "bookSeat": "Book a space",
            "myBookings": "My bookings",
            "loadingHint": "Loading data...",
            "space": "Space",
            "confirmBooking": "Confirm booking",
            "cancel": "Cancel",
            "bookingConfirmed": "Your booking has been confirmed!",
            "cancelBooking": "Cancel booking",
            "confirmCancelBooking": "Cancel your upcoming booking for {{enter}}?",
            "noBookings": "No bookings.",
            "createAccount": "Create free account",
            "errorConfluenceClientIdUnknown": "Let's get started.",
            "confluenceClientIdHint": "Welcome to Seatsurfing! For this app to work with Confluence, we'll need to link your Confluence instance with your Seatsurfing account. Please perform the following steps:",
            "confluenceClientIdStep1": "Create a free Seatsurfing account.",
            "confluenceClientIdStep2": "Log in to the administrator interface.",
            "confluenceClientIdStep3": "Navigate to 'Settings'.",
            "confluenceClientIdStep4": "Copy the following ID:",
            "confluenceClientIdStep5": "Paste the ID as 'Confluence Client ID' and save your Settings.",
            "confluenceClientIdStep6": "Reload this page.",
            "confluenceClientIdHint2": "Need help?",
            "confluenceClientIdHint3": "We'll be happy to help.",
            "errorLoginFailed": "Login failed.",
            "loginFailedDescription": "Possibly your account is not activated in this organization.",
            "mergeUserAccounts": "Merge accounts",
            "mergeUserAccountsHint": "You can easily merge this Seatsurfing user account for your Confluence user with your regular Seatsurfing user account. This enables you to use both the mobile app and the Confluence integration to manage your bookings. Enter the email address of your regular Seatsurfing account to get started.",
            "requestMerge": "Request merge",
            "mergeUserAccountsNextStepHint": "Great! One step left: Log in with your regular Seatsurfing user account using the web app to confirm this merge request within the next hour.",
            "openWebUI": "Open Web App",
            "accept": "Accept",
            "introIncomingMergeRequests": "You have incoming account merge request. Accept them only if you initiated these.",
            "errorConfluenceAnonymous": "Unauthorized.",
            "confluenceAnonymousHint": "Please log in with Confluence to use the Seatsurfing for Confluence App.",
        }
    }
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: "en",
    keySeparator: false
});
Formatting.Language = i18n.language.split("-")[0];

export default i18n;
