import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function ConformationModal({ isOpen, onClose, onClickYes, modalHeader }) {
  return (
    <Dialog open={isOpen} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogTitle>Are you sure</DialogTitle>
      <DialogContent>
        <DialogContentText>{modalHeader}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button
          variant="contained"
          autoFocus
          onClick={onClickYes}
          color="primary"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { ConformationModal };
