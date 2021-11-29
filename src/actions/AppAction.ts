/* eslint-disable @typescript-eslint/no-explicit-any */
import ActionTypes, { ActionValues, AppState } from "./ActionTypes";

export const setLoading = (
  payload: number | string | boolean | AppState | any | null
): ActionValues => {
  return {
    type: ActionTypes.SET_LOADING,
    payload,
  };
};

export const setUploading = (
  payload: number | string | boolean | AppState | any | null
): ActionValues => {
  return {
    type: ActionTypes.SET_UPLOADING,
    payload,
  };
};
