import { createSelector } from '@ngrx/store';

import { Status } from '@core/enums';
import { EcommerceApiResponse, LoadingStatus, ProductResponse } from '@core/interfaces';

import * as fromReducers from '../reducers';
import * as fromFeature from '../reducers/admin.reducers';

export const selectProductLoadingStatus = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): LoadingStatus => {
    return state.productResponseLoadingStatus;
  },
);

export const selectProductResponseStatus = createSelector(
  selectProductLoadingStatus,
  (status: LoadingStatus): string => {
    if (status.isLoading) {
      return Status.PROCESSING;
    }
    if (status.isLoaded) {
      return status.error ? Status.FAIL : Status.SUCCESS;
    }

    return Status.INITIAL;
  },
);

export const selectProductResponse = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): ProductResponse | undefined => {
    return state.productResponse;
  },
);

export const selectProductsLoadingStatus = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): LoadingStatus => {
    return state.productsResponseLoadingStatus;
  },
);

export const selectProductsResponseStatus = createSelector(
  selectProductsLoadingStatus,
  (status: LoadingStatus): string => {
    if (status.isLoading) {
      return Status.PROCESSING;
    }
    if (status.isLoaded) {
      return status.error ? Status.FAIL : Status.SUCCESS;
    }

    return Status.INITIAL;
  },
);

export const selectProductsResponse = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): ProductResponse[] | undefined => {
    return state.productsResponse;
  },
);

export const selectProductCreateLoadingStatus = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): LoadingStatus => {
    return state.productResponseCreateLoadingStatus;
  },
);

export const selectProductCreateStatus = createSelector(
  selectProductCreateLoadingStatus,
  (status: LoadingStatus): string => {
    if (status.isLoading) {
      return Status.PROCESSING;
    }
    if (status.isLoaded) {
      return status.error ? Status.FAIL : Status.SUCCESS;
    }

    return Status.INITIAL;
  },
);

export const selectProductCreateResponse = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): ProductResponse | undefined => {
    return state.productResponseCreate;
  },
);

export const selectProductUpdateLoadingStatus = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): LoadingStatus => {
    return state.productResponseUpdateLoadingStatus;
  },
);

export const selectProductUpdateStatus = createSelector(
  selectProductUpdateLoadingStatus,
  (status: LoadingStatus): string => {
    if (status.isLoading) {
      return Status.PROCESSING;
    }
    if (status.isLoaded) {
      return status.error ? Status.FAIL : Status.SUCCESS;
    }

    return Status.INITIAL;
  },
);

export const selectProductUpdateResponse = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): ProductResponse | undefined => {
    return state.productResponseUpdate;
  },
);

export const selectProductDeleteLoadingStatus = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): LoadingStatus => {
    return state.ecommerceApiRespProductLoadingStatus;
  },
);

export const selectProductDeleteStatus = createSelector(
  selectProductDeleteLoadingStatus,
  (status: LoadingStatus): string => {
    if (status.isLoading) {
      return Status.PROCESSING;
    }
    if (status.isLoaded) {
      return status.error ? Status.FAIL : Status.SUCCESS;
    }

    return Status.INITIAL;
  },
);

export const selectProductDeleteResponse = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): EcommerceApiResponse | undefined => {
    return state.ecommerceApiRespProduct;
  },
);

export const selectProductIdToDelete = createSelector(
  fromReducers.selectAdminState,
  (state: fromFeature.AdminState): number | undefined => {
    return state.productId;
  },
);

export const selectDelatedProductId = createSelector(
  selectProductDeleteResponse,
  selectProductIdToDelete,
  (
    productDeletedResponse: EcommerceApiResponse | undefined,
    productId: number | undefined,
  ): number | undefined => {
    return productDeletedResponse?.success ? productId : undefined;
  },
);
