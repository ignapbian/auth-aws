import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';

export class AuthenticationService extends IonicAuth {

constructor() {
    const auth0Config : IonicAuthOptions = {
        // the auth provider
        authConfig: 'auth0',
        // The platform which the app is running on
        platform: 'capacitor',
        // client or application id for provider
        clientID: '',
        // the discovery url for the provider
        // OpenID configuration
        discoveryUrl: '',
        // the URI to redirect to after log in
        redirectUri: 'myapp://callback',
        // requested scopes from provider
        scope: 'openid offline_access email picture profile',
        // the audience, if applicable
        audience: 'FILL_IN',
        // the URL to redirect to after log out
        logoutUrl: 'myapp://signout',
        // The type of iOS webview to use. 'shared' will use a webview that can 
        // share session/cookies on iOS to provide SSO across multiple apps but
        // will cause a prompt for the user which asks them to confirm they want
        // to share site data with the app. 'private' uses a webview which will
        // not prompt the user but will not be able to share session/cookie data
        // either for true SSO across multiple apps.
        iosWebView: 'private'
    };

    super(auth0Config);
    }
}