import { Redirect, Route, Switch } from "react-router-dom";
import { DocList } from "pages/authenticated/doc-list";
import { AppLayout } from "layouts/app-layout";
import { DocDetails } from "components/doc-details";

function AuthenticatedApp() {
  return (
    <Switch>
      <Route exact path="/home">
        <AppLayout>
          <DocList />
        </AppLayout>
      </Route>
      <Route path="/home/:id">
        <AppLayout>
          <DocDetails />
        </AppLayout>
      </Route>

      <Redirect to="/home" />
    </Switch>
  );
}

export { AuthenticatedApp };
