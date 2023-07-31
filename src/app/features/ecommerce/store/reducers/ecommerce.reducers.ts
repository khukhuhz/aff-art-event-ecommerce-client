import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';

import {
  EcommerceApiResponse,
  initialStatus,
  LoadingStatus,
  ProductResponse,
  SignInResponse,
  SignUpResponse,
} from '@core/interfaces';

export interface EcommerceState {
  signUpResponse?: SignUpResponse;
  signUpResponseLoadingStatus: LoadingStatus;

  signInResponse?: SignInResponse;
  signInResponseLoadingStatus: LoadingStatus;

  ecommerceApiResponse?: EcommerceApiResponse;
  ecommerceApiResponseLoadingStatus: LoadingStatus;

  productsResponse?: ProductResponse[];
  productsResponseLoadingStatus: LoadingStatus;

  wishListProducts?: ProductResponse[];
  wishListProductsLoadingStatus: LoadingStatus;

  addToWishListResponse?: EcommerceApiResponse;
  addToWishListResponseLoadingStatus: LoadingStatus;

  deleteFromWishListResponse?: EcommerceApiResponse;
  deleteFromWishListResponseLoadingStatus: LoadingStatus;

  deleteAllFromWishListResponse?: EcommerceApiResponse;
  deleteAllFromWishListResponseLoadingStatus: LoadingStatus;
}

export const initialState: EcommerceState = {
  signUpResponse: undefined,
  signUpResponseLoadingStatus: initialStatus,

  signInResponse: undefined,
  signInResponseLoadingStatus: initialStatus,

  ecommerceApiResponse: undefined,
  ecommerceApiResponseLoadingStatus: initialStatus,

  productsResponse: [],
  productsResponseLoadingStatus: initialStatus,

  wishListProducts: [],
  wishListProductsLoadingStatus: initialStatus,

  addToWishListResponse: undefined,
  addToWishListResponseLoadingStatus: initialStatus,

  deleteFromWishListResponse: undefined,
  deleteFromWishListResponseLoadingStatus: initialStatus,

  deleteAllFromWishListResponse: undefined,
  deleteAllFromWishListResponseLoadingStatus: initialStatus,
};

export const EcommerceReducers = createReducer(
  initialState,

  on(
    fromActions.SignUpLoadComplete,
    (state: EcommerceState, { signUpResponse }): EcommerceState => ({
      ...state,
      signUpResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      signUpResponse,
    }),
  ),

  on(
    fromActions.SignUpLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      signUpResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.SignInLoad,
    (state: EcommerceState): EcommerceState => ({
      ...state,
      signInResponseLoadingStatus: {
        ...initialStatus,
        isLoading: true,
      },
    }),
  ),

  on(
    fromActions.SignInLoadComplete,
    (state: EcommerceState, { signInResponse }): EcommerceState => ({
      ...state,
      signInResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      signInResponse,
    }),
  ),

  on(
    fromActions.SignInLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      signInResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.LogOutLoadComplete,
    (state: EcommerceState, { ecommerceApiResponse }): EcommerceState => ({
      ...state,
      ...initialState,
      ecommerceApiResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      ecommerceApiResponse,
    }),
  ),

  on(
    fromActions.LogOutLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      ecommerceApiResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.ProductsLoadComplete,
    (state: EcommerceState, { productsResponse }): EcommerceState => ({
      ...state,
      productsResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      productsResponse,
    }),
  ),

  on(
    fromActions.ProductsLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      productsResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.WishListLoadComplete,
    (state: EcommerceState, { wishListProducts }): EcommerceState => ({
      ...state,
      wishListProductsLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      wishListProducts,
    }),
  ),

  on(
    fromActions.WishListLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      wishListProductsLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.AddToWishListLoadComplete,
    (state: EcommerceState, { addToWishListResponse }): EcommerceState => ({
      ...state,
      addToWishListResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      addToWishListResponse,
    }),
  ),

  on(
    fromActions.AddToWishListLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      addToWishListResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.DeleteFromWishListLoadComplete,
    (state: EcommerceState, { deleteFromWishListResponse }): EcommerceState => ({
      ...state,
      deleteFromWishListResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      deleteFromWishListResponse,
    }),
  ),

  on(
    fromActions.DeleteFromWishListLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      deleteFromWishListResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.DeleteAllFromWishListLoadComplete,
    (state: EcommerceState, { deleteAllFromWishListResponse }): EcommerceState => ({
      ...state,
      deleteAllFromWishListResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      deleteAllFromWishListResponse,
    }),
  ),

  on(
    fromActions.DeleteAllFromWishListLoadError,
    (state, { error }): EcommerceState => ({
      ...state,
      deleteAllFromWishListResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),
);
