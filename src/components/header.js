import {
  AppBar,
  Avatar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isLoadingFalse, isLoadingTrue } from "redux/actions/app-loader";
import { logoutUser } from "redux/actions/auth-action";
import { clearAppData } from "redux/actions/document-action";
import { ConformationModal } from "./conformation-modal";

/**
 * @component
 * @example
 * <Header />
 */

function Header() {
  const dispatch = useDispatch();
  const [logoutModal, setLogoutModal] = useState(false);
  const { userDetail } = useSelector((state) => state.authReducer);

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters className="d-flex">
          <Typography variant="h6" component="div">
            Document Tracker
          </Typography>
          <div className="d-flex">
            <span>{userDetail?.email}</span>
            <Avatar className="user-avtar">
              {userDetail?.email.substring(0, 1) || "t"}
            </Avatar>

            <Button color="inherit" onClick={() => setLogoutModal(true)}>
              Logout
            </Button>
          </div>
        </Toolbar>
        {logoutModal && (
          <ConformationModal
            onClickYes={() => {
              dispatch(isLoadingTrue());
              setLogoutModal(false);
              setTimeout(() => {
                dispatch(isLoadingFalse());
                dispatch(logoutUser());
                dispatch(clearAppData());
                toast("User Logout");
              }, 1000);
            }}
            isOpen={logoutModal}
            modalHeader="Are you sure you want to Logout"
            onClose={() => {
              setLogoutModal(false);
            }}
          />
        )}
      </Container>
    </AppBar>
  );
}

export { Header };
