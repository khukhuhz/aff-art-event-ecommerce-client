import { HttpErrorResponse } from '@angular/common/http';
import { EcommerceApiResponse, ProductRequest, ProductResponse } from '@core/interfaces';
import { createAction, props } from '@ngrx/store';

export enum ActionType {
  PRODUCT_LOAD = '[Product] Load Product',
  PRODUCT_LOAD_COMPLETE = '[Product] Product Loaded',
  PRODUCT_LOAD_ERROR = '[Product] Product Load Error',

  PRODUCTS_LOAD = '[Products] Load Products',
  PRODUCTS_LOAD_COMPLETE = '[Products] Products Loaded',
  PRODUCTS_LOAD_ERROR = '[Products] Products Load Error',

  CREATE_PRODUCT = '[Product] Create Product',
  CREATE_PRODUCT_COMPLETE = '[Product] Product Created',
  CREATE_PRODUCT_ERROR = '[Product] Product Creation Error',

  UPDATE_PRODUCT = '[Product] Update Product',
  UPDATE_PRODUCT_COMPLETE = '[Product] Product Updated',
  UPDATE_PRODUCT_ERROR = '[Product] Product Update Error',

  DELETE_PRODUCT = '[Product] Delete Product',
  DELETE_PRODUCT_COMPLETE = '[Product] Product Deleted',
  DELETE_PRODUCT_ERROR = '[Product] Product Delete Error',
}

export const ProductLoad = createAction(ActionType.PRODUCT_LOAD, props<{ productId: number }>());

export const ProductLoadComplete = createAction(
  ActionType.PRODUCT_LOAD_COMPLETE,
  props<{ productResponse: ProductResponse }>(),
);

export const ProductLoadError = createAction(
  ActionType.PRODUCT_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const ProductsLoad = createAction(ActionType.PRODUCTS_LOAD);

export const ProductsLoadComplete = createAction(
  ActionType.PRODUCTS_LOAD_COMPLETE,
  props<{ productsResponse: ProductResponse[] }>(),
);

export const ProductsLoadError = createAction(
  ActionType.PRODUCTS_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const CreateProduct = createAction(
  ActionType.CREATE_PRODUCT,
  props<{ productRequest: ProductRequest; token: string }>(),
);

export const CreateProductComplete = createAction(
  ActionType.CREATE_PRODUCT_COMPLETE,
  props<{ productResponseCreate: ProductResponse }>(),
);

export const CreateProductError = createAction(
  ActionType.CREATE_PRODUCT_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const UpdateProduct = createAction(
  ActionType.UPDATE_PRODUCT,
  props<{ productId: number; productRequest: ProductRequest; token: string }>(),
);

export const UpdateProductComplete = createAction(
  ActionType.UPDATE_PRODUCT_COMPLETE,
  props<{ productResponseUpdate: ProductResponse }>(),
);

export const UpdateProductError = createAction(
  ActionType.UPDATE_PRODUCT_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const DeleteProduct = createAction(
  ActionType.DELETE_PRODUCT,
  props<{ productId: number; token: string }>(),
);

export const DeleteProductComplete = createAction(
  ActionType.DELETE_PRODUCT_COMPLETE,
  props<{ ecommerceApiRespProduct: EcommerceApiResponse }>(),
);

export const DeleteProductError = createAction(
  ActionType.DELETE_PRODUCT_ERROR,
  props<{ error: HttpErrorResponse }>(),
);
