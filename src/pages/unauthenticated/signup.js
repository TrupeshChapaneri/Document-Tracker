import React from "react";
import { Controller, useForm } from "react-hook-form";
import { signupSchema } from "./validations/unauthenticated.schema";
import { Typography, Container, TextField, Button } from "@material-ui/core";
import { joiResolver } from "@hookform/resolvers";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { signUpUser } from "redux/actions/auth-action";
import { removeDoubleQuotes } from "utils/utils";
import { toast } from "react-toastify";
import { isLoadingFalse, isLoadingTrue } from "redux/actions/app-loader";
import { LoadingData } from "components/loading-data";
import { useIsLoading } from "hooks/useIsLoading";

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isAppLoading = useIsLoading();

  const { handleSubmit, errors, control } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onChange",
    submitFocusError: true,
    shouldUnregister: false,
    resolver: joiResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSignup = (data) => {
    const payload = {
      ...data,
      userId: uuidv4(),
    };
    dispatch(isLoadingTrue());
    setTimeout(() => {
      dispatch(isLoadingFalse());
      dispatch(signUpUser(payload));
      toast("New User Created");
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
          Create New Account
        </Typography>
        <form>
          <Controller
            control={control}
            name="fullName"
            render={({ onChange, value, onBlur }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                name="fullName"
                label="Full Name"
                onBlur={onBlur}
                error={errors.fullName}
                variant="outlined"
                helperText={
                  errors.fullName && removeDoubleQuotes(errors.fullName.message)
                }
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          />

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

          <Button
            style={{ marginTop: "10px" }}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSignup)}
          >
            Sign Up
          </Button>
          <div component="h5" variant="h5" className="unauth-wrap-link">
            Already have an account?
            <span onClick={() => history.push("/signin")}> Sign In</span>
          </div>
        </form>
      </div>
    </Container>
  );
}

export { SignUp };
