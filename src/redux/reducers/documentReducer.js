/* eslint-disable import/no-anonymous-default-export */

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

const initialState = {
  documentList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DOCUMENT_LIST: {
      return { ...state, documentList: [...(state.documentList || [])] };
    }

    case GET_SINGLE_DOCUMENT: {
      let data = {};
      if (action.id) {
        data = state.documentList.filter((d) => d.id === action.id);
      }
      return { ...state, singleDocument: data[0] };
    }

    case CLEAR_SINGLE_DOCUMENT: {
      return { ...state, singleDocument: {} };
    }

    case ADD_DOCUMENT_LIST: {
      return {
        ...state,
        documentList: [...state.documentList, action.data],
      };
    }

    case UPDATE_DOCUMENT_LIST: {
      const newDocumentList = [...(state.documentList || [])];
      const updatedIndex = newDocumentList.findIndex(
        (doc) => doc.id === action.data.id
      );
      if (updatedIndex > -1) {
        newDocumentList[updatedIndex].title = action.data.title;
        newDocumentList[updatedIndex].description = action.data.description;
        newDocumentList[updatedIndex].isEdited = action.data.isEdited;
      }
      return {
        ...state,
        documentList: newDocumentList,
      };
    }

    case DELETE_DOCUMENT_LIST: {
      return {
        ...state,
        documentList: state.documentList.filter((doc) => doc.id !== action.id),
      };
    }

    case TITLE_SORT_ASC: {
      const sortedData = state.documentList.sort(function (a, b) {
        const titleA = a?.title?.toUpperCase();
        const titleB = b?.title?.toUpperCase();
        return titleA === titleB ? 0 : titleA > titleB ? 1 : -1;
      });

      return {
        ...state,
        documentList: sortedData,
      };
    }

    case TITLE_SORT_DESC: {
      const sortedData = state.documentList.sort(function (a, b) {
        const titleA = a?.title?.toUpperCase();
        const titleB = b?.title?.toUpperCase();
        return titleA === titleB ? 0 : titleA > titleB ? -1 : 1;
      });

      return {
        ...state,
        documentList: sortedData,
      };
    }

    case CLEAR_APP_DATA: {
      return { ...state, documentList: [] };
    }

    default:
      return state;
  }
}
