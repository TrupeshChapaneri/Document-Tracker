/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import Joi from "joi";
import { Box, Button, Typography, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { removeDoubleQuotes } from "utils/utils";
import { joiResolver } from "@hookform/resolvers";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addDocument,
  clearSingleDocument,
  updateDocument,
} from "redux/actions/document-action";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { isLoadingFalse, isLoadingTrue } from "redux/actions/app-loader";

function DocDetails({ setAddDoc }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: editId } = useParams();

  const { singleDocument = {} } = useSelector((state) => state.documentReducer);

  const { handleSubmit, errors, control, reset } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onChange",
    submitFocusError: true,
    shouldUnregister: false,
    resolver: joiResolver(
      Joi.object({
        title: Joi.string().trim().required().min(1).max(30).label("Title"),
        description: Joi.string()
          .trim()
          .required()
          .min(1)
          .max(120)
          .label("description"),
      })
    ),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (singleDocument?.id) {
      reset({
        title: singleDocument.title,
        description: singleDocument.description,
      });
    }
  }, [singleDocument, reset]);

  useEffect(() => {
    if (editId) {
      return () => {
        dispatch(clearSingleDocument());
      };
    }
  }, [dispatch, editId]);

  const submitForm = (data) => {
    if (editId) {
      const payload = {
        ...data,
        id: editId,
        isEdited: true,
      };

      dispatch(isLoadingTrue());
      history.push("/home");

      setTimeout(() => {
        dispatch(isLoadingFalse());
        dispatch(updateDocument(payload));
        toast("Document Update");
      }, 1000);
      return;
    }

    if (!editId) {
      const payload = {
        ...data,
        id: uuidv4(),
        isEdited: false,
      };

      dispatch(isLoadingTrue());

      setTimeout(() => {
        dispatch(isLoadingFalse());
        dispatch(addDocument(payload));
        toast("Document Added");
        setAddDoc(false);
      }, 1000);
      return;
    }
  };

  return (
    <React.Fragment>
      <Box className="d-flex list-head">
        <Typography variant="h6" component="div">
          {editId ? "Update" : "Add"} Document
        </Typography>
        <div>
          <Button
            variant="outlined"
            onClick={() => {
              if (editId) {
                history.push("/home");
              } else {
                setAddDoc(false);
              }
            }}
          >
            Cancel
          </Button>
          <Button
            style={{ marginLeft: "30px" }}
            color="primary"
            variant="contained"
            onClick={handleSubmit(submitForm)}
          >
            {editId ? "Update" : "Add"} Document
          </Button>
        </div>
      </Box>
      <form className="form-detail">
        <Controller
          control={control}
          name="title"
          render={({ onChange, value, onBlur }) => (
            <TextField
              label="Enter Document Title"
              required
              multiline
              fullWidth
              onBlur={onBlur}
              error={errors.title}
              variant="outlined"
              helperText={
                errors.title && removeDoubleQuotes(errors.title.message)
              }
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ onChange, value, onBlur }) => (
            <TextField
              label="Enter Document Description"
              required
              fullWidth
              multiline
              minRows={6}
              onBlur={onBlur}
              error={errors.description}
              variant="outlined"
              helperText={
                errors.description &&
                removeDoubleQuotes(errors.description.message)
              }
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        />
      </form>
    </React.Fragment>
  );
}

export { DocDetails };
