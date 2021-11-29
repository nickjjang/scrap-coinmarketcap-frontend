/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AppState {
  downloading?: boolean;
  downloadingProgress?: number;
  uploading?: boolean;
  uploadingProgress?: number;
  loading?: boolean;
  loadingProgress?: number;
}

export interface ActionValues {
  type: string;
  payload: number | string | boolean | AppState | any | null;
}

export default {
  SET_UPLOADING: "SET_UPLOADING",
  SET_LOADING: "SET_LOADING",
};
