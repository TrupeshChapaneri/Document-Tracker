import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "pages/unauthenticated/signin";
import { SignUp } from "pages/unauthenticated/signup";

function UnauthenticatedApp() {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Redirect to="/signin" />
    </Switch>
  );
}

export { UnauthenticatedApp };
