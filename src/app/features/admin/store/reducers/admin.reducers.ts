import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';

import {
  EcommerceApiResponse,
  initialStatus,
  LoadingStatus,
  ProductResponse,
} from '@core/interfaces';

export interface AdminState {
  productResponse?: ProductResponse;
  productResponseLoadingStatus: LoadingStatus;

  productsResponse?: ProductResponse[];
  productsResponseLoadingStatus: LoadingStatus;

  productId?: number;
  ecommerceApiRespProduct?: EcommerceApiResponse;
  ecommerceApiRespProductLoadingStatus: LoadingStatus;

  productResponseCreate?: ProductResponse;
  productResponseCreateLoadingStatus: LoadingStatus;

  productResponseUpdate?: ProductResponse;
  productResponseUpdateLoadingStatus: LoadingStatus;
}

export const initialState: AdminState = {
  productResponse: undefined,
  productResponseLoadingStatus: initialStatus,

  productsResponse: [],
  productsResponseLoadingStatus: initialStatus,

  productId: undefined,
  ecommerceApiRespProduct: undefined,
  ecommerceApiRespProductLoadingStatus: initialStatus,

  productResponseCreate: undefined,
  productResponseCreateLoadingStatus: initialStatus,

  productResponseUpdate: undefined,
  productResponseUpdateLoadingStatus: initialStatus,
};

export const AdminReducers = createReducer(
  initialState,

  on(
    fromActions.ProductLoadComplete,
    (state: AdminState, { productResponse }): AdminState => ({
      ...state,
      productResponseLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      productResponse,
    }),
  ),

  on(
    fromActions.ProductLoadError,
    (state, { error }): AdminState => ({
      ...state,
      productResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.ProductsLoadComplete,
    (state: AdminState, { productsResponse }): AdminState => ({
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
    (state, { error }): AdminState => ({
      ...state,
      productsResponseLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.CreateProductComplete,
    (state: AdminState, { productResponseCreate }): AdminState => ({
      ...state,
      productResponseCreateLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      productResponseCreate,
    }),
  ),

  on(
    fromActions.CreateProductError,
    (state, { error }): AdminState => ({
      ...state,
      productResponseCreateLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.UpdateProductComplete,
    (state: AdminState, { productResponseUpdate }): AdminState => ({
      ...state,
      productResponseUpdateLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      productResponseUpdate,
    }),
  ),

  on(
    fromActions.UpdateProductError,
    (state, { error }): AdminState => ({
      ...state,
      productResponseUpdateLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),

  on(
    fromActions.DeleteProduct,
    (state: AdminState, { productId }): AdminState => ({
      ...state,
      ecommerceApiRespProductLoadingStatus: {
        ...initialStatus,
        isLoading: true,
      },
      productId,
    }),
  ),

  on(
    fromActions.DeleteProductComplete,
    (state: AdminState, { ecommerceApiRespProduct }): AdminState => ({
      ...state,
      ecommerceApiRespProductLoadingStatus: {
        ...initialStatus,
        isLoaded: true,
      },
      ecommerceApiRespProduct,
    }),
  ),

  on(
    fromActions.DeleteProductError,
    (state, { error }): AdminState => ({
      ...state,
      ecommerceApiRespProductLoadingStatus: {
        ...initialStatus,
        error,
      },
    }),
  ),
);
