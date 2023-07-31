export interface LoadingStatus {
  isLoading: boolean;
  isLoaded: boolean;
  error: unknown;
}

export const initialStatus: LoadingStatus = {
  isLoading: false,
  isLoaded: false,
  error: null,
};
