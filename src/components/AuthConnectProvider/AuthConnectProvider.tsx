import {
    AuthConnectProvider,
    PrivateRoute,
  } from "@ionic-enterprise/auth-react";
import { isPlatform } from "@ionic/react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import App from "../../App";
import Callback from "../../pages/Callback";
import Login from "../../pages/login";
import Logout from "../../pages/logout";

  const platform = isPlatform("capacitor") ? "capacitor" : "web";

const redirectUri = isPlatform("capacitor")
  ? "com.ionic.auth-demo://callback"
  : "http://localhost:3000/callback";

const logoutUrl = isPlatform("capacitor")
  ? "com.ionic.auth-demo://logout"
  : "http://localhost:3000/logout";

  const AuthConnectContainer: React.FC = () => {
    const location = useLocation();
    return (
      <AuthConnectProvider
        checkSessionOnChange={location.pathname}
        logLevel={"ERROR"}
        authConfig={"auth0"}
        platform={platform}
        clientID={""}
        discoveryUrl={""}
        redirectUri={redirectUri}
        scope={"openid offline_access email picture profile"}
        audience={"[YOUR_AUTH0_AUDIENCE]"}
        logoutUrl={logoutUrl}
        iosWebView={"private"}
        webAuthFlow={"PKCE"}
        implicitLogin={"POPUP"}
        loginPath={"/login"}
        onLoginSuccess={(result) => console.log("Login Successful", { result })}
        onLogoutSuccess={() => console.log("Logout Successful")}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/callback" component={Callback} />
          <PrivateRoute path="/tabs" component={App} initializingComponent={() => <div>...Private Route Loading...</div>} />        
          <Redirect from="/" to="/login" exact />
        </Switch>
      </AuthConnectProvider>
    );
  };
  export default AuthConnectContainer;