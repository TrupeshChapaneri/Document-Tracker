import React from "react";
import { Controller, useForm } from "react-hook-form";
import { signInSchema } from "./validations/unauthenticated.schema";
import { Typography, Container, TextField, Button } from "@material-ui/core";
import { joiResolver } from "@hookform/resolvers";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "redux/actions/auth-action";
import { removeDoubleQuotes } from "utils/utils";
import { isLoadingFalse, isLoadingTrue } from "redux/actions/app-loader";
import { LoadingData } from "components/loading-data";
import { useIsLoading } from "hooks/useIsLoading";

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isError = false, errorMsg } = useSelector(
    (state) => state.authReducer
  );
  const isAppLoading = useIsLoading();

  const { handleSubmit, errors, control } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onChange",
    submitFocusError: true,
    shouldUnregister: false,
    resolver: joiResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignIn = (data) => {
    dispatch(isLoadingTrue());

    setTimeout(() => {
      dispatch(isLoadingFalse());
      dispatch(loginUser(data));
    }, 1000);
  };

  if (isAppLoading) {
    return <LoadingData />;
  }

  return (
    <Container className="unauth-wrap" component="main" maxWidth="xs">
      <div>
        <Typography
          component="h5"
          variant="h5"
          style={{ marginBottom: "14px" }}
        >
          Sign in Document Tracker
        </Typography>
        <form>
          <Controller
            control={control}
            name="email"
            render={({ onChange, value, onBlur }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                onBlur={onBlur}
                error={errors.email}
                variant="outlined"
                helperText={
                  errors.email && removeDoubleQuotes(errors.email.message)
                }
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ onChange, value, onBlur }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onBlur={onBlur}
                error={errors.password}
                variant="outlined"
                helperText={
                  errors.password && removeDoubleQuotes(errors.password.message)
                }
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />
          {isError && <p>{errorMsg}</p>}

          <Button
            style={{ marginTop: "10px" }}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSignIn)}
          >
            Sign In
          </Button>
          <div component="h5" variant="h5" className="unauth-wrap-link">
            Don't have an account?
            <span onClick={() => history.push("/signup")}> Sign Up</span>
          </div>
        </form>
      </div>
    </Container>
  );
}

export { SignIn };
