import { createSelector } from '@ngrx/store';

import { Status } from '@core/enums';
import {
  EcommerceApiResponse,
  LoadingStatus,
  ProductResponse,
  SignInResponse,
  SignUpResponse,
} from '@core/interfaces';

import * as fromReducers from '../reducers';
import * as fromFeature from '../reducers/ecommerce.reducers';

export const selectSignUpLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.signUpResponseLoadingStatus;
  },
);

export const selectSignUpStatus = createSelector(
  selectSignUpLoadingStatus,
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

export const selectSignUpResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): SignUpResponse | undefined => {
    return state.signUpResponse;
  },
);

export const selectSignInLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.signInResponseLoadingStatus;
  },
);

export const selectSignInStatus = createSelector(
  selectSignInLoadingStatus,
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

export const selectSignInResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): SignInResponse | undefined => {
    return state.signInResponse;
  },
);

export const selectLogoutLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.ecommerceApiResponseLoadingStatus;
  },
);

export const selectLogoutStatus = createSelector(
  selectLogoutLoadingStatus,
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

export const selectLogoutResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): EcommerceApiResponse | undefined => {
    return state.ecommerceApiResponse;
  },
);

export const selectProductsLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
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
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): ProductResponse[] | undefined => {
    return state.productsResponse;
  },
);

export const selectWishListLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.wishListProductsLoadingStatus;
  },
);

export const selectWishListResponseStatus = createSelector(
  selectWishListLoadingStatus,
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

export const selectWishListResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): ProductResponse[] | undefined => {
    return state.wishListProducts;
  },
);

export const selectWishListIds = createSelector(
  selectWishListResponse,
  selectProductsResponse,
  (
    wishList: ProductResponse[] | undefined,
    products: ProductResponse[] | undefined,
  ): number[] | undefined => {
    return products && wishList?.map((product) => product.productId);
  },
);

export const selectaddToWishListLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.addToWishListResponseLoadingStatus;
  },
);

export const selectaddToWishListResponseStatus = createSelector(
  selectaddToWishListLoadingStatus,
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

export const selectaddToWishListResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): EcommerceApiResponse | undefined => {
    return state.addToWishListResponse;
  },
);

export const selectDeleteFromWishListLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.deleteFromWishListResponseLoadingStatus;
  },
);

export const selectDeleteFromWishListResponseStatus = createSelector(
  selectDeleteFromWishListLoadingStatus,
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

export const selectDeleteFromWishListResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): EcommerceApiResponse | undefined => {
    return state.deleteFromWishListResponse;
  },
);

export const selectDeleteAllFromWishListLoadingStatus = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): LoadingStatus => {
    return state.deleteAllFromWishListResponseLoadingStatus;
  },
);

export const selectDeleteAllFromWishListResponseStatus = createSelector(
  selectDeleteAllFromWishListLoadingStatus,
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

export const selectDeleteAllFromWishListResponse = createSelector(
  fromReducers.selectEcommerceState,
  (state: fromFeature.EcommerceState): EcommerceApiResponse | undefined => {
    return state.deleteAllFromWishListResponse;
  },
);
