import React from "react";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import { useSelector } from "react-redux";

function App() {
  const { isUserAuthenticated = false } = useSelector(
    (state) => state.authReducer
  );

  return (
    <React.Fragment>
      {isUserAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Fragment>
  );
}

export default App;
