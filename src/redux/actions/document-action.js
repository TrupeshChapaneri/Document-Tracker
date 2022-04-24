import {
  ADD_DOCUMENT_LIST,
  CLEAR_APP_DATA,
  CLEAR_SINGLE_DOCUMENT,
  DELETE_DOCUMENT_LIST,
  GET_DOCUMENT_LIST,
  GET_SINGLE_DOCUMENT,
  TITLE_SORT_ASC,
  TITLE_SORT_DESC,
  UPDATE_DOCUMENT_LIST,
} from "redux/types";

export function getDocumentList() {
  return {
    type: GET_DOCUMENT_LIST,
  };
}

export function addDocument(data) {
  return {
    type: ADD_DOCUMENT_LIST,
    data,
  };
}

export function getSingleDocument(id) {
  return {
    type: GET_SINGLE_DOCUMENT,
    id,
  };
}

export function deleteDocument(id) {
  return {
    type: DELETE_DOCUMENT_LIST,
    id,
  };
}

export function updateDocument(data) {
  return {
    type: UPDATE_DOCUMENT_LIST,
    data,
  };
}

export function clearSingleDocument() {
  return {
    type: CLEAR_SINGLE_DOCUMENT,
  };
}

export function clearAppData() {
  return {
    type: CLEAR_APP_DATA,
  };
}

export function titleSortAsc() {
  return {
    type: TITLE_SORT_ASC,
  };
}

export function titleSortDesc() {
  return {
    type: TITLE_SORT_DESC,
  };
}
