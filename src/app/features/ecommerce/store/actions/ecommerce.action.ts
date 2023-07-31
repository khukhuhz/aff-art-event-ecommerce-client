import { HttpErrorResponse } from '@angular/common/http';
import {
  EcommerceApiResponse,
  ProductResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  WishListRequest,
} from '@core/interfaces';

import { createAction, props } from '@ngrx/store';

export enum ActionType {
  SIGNUP_LOAD = '[SignUp] Load Signup',
  SIGNUP_LOAD_COMPLETE = '[SignUp] Signup Loaded',
  SIGNUP_LOAD_ERROR = '[SignUp] Signup Load Error',

  SIGNIN_LOAD = '[SignIn] Load Signin',
  SIGNIN_LOAD_COMPLETE = '[SignIn] Signin Loaded',
  SIGNIN_LOAD_ERROR = '[SignIn] Signin Load Error',

  LOGOUT_LOAD = '[Logout] Load Logout',
  LOGOUT_LOAD_COMPLETE = '[Logout] Logout Loaded',
  LOGOUT_LOAD_ERROR = '[Logout] Logout Load Error',

  PRODUCTS_LOAD = '[Products] Load Products',
  PRODUCTS_LOAD_COMPLETE = '[Products] Products Loaded',
  PRODUCTS_LOAD_ERROR = '[Products] Products Load Error',

  WISHLIST_LOAD = '[WishList] Load WishList',
  WISHLIST_LOAD_COMPLETE = '[WishList] WishList Loaded',
  WISHLIST_LOAD_ERROR = '[WishList] WishList Load Error',

  ADD_TO_WISHLIST_LOAD = '[WishList] Load Add to WishList',
  ADD_TO_WISHLIST_LOAD_COMPLETE = '[WishList] Add to WishList Loaded',
  ADD_TO_WISHLIST_LOAD_ERROR = '[WishList] Add to WishList Load Error',

  DELETE_FROM_WISHLIST_LOAD = '[WishList] Load Delete From WishList',
  DELETE_FROM_WISHLIST_LOAD_COMPLETE = '[WishList] Delete From WishList Loaded',
  DELETE_FROM_WISHLIST_LOAD_ERROR = '[WishList] Delete From WishList Load Error',

  DELETE_ALL_FROM_WISHLIST_LOAD = '[WishList] Load Delete All From WishList',
  DELETE_ALL_FROM_WISHLIST_LOAD_COMPLETE = '[WishList] Delete All From WishList Loaded',
  DELETE_ALL_FROM_WISHLIST_LOAD_ERROR = '[WishList] Delete All From WishList Load Error',
}

export const SignUpLoad = createAction(
  ActionType.SIGNUP_LOAD,
  props<{ signUpRequest: SignUpRequest }>(),
);

export const SignUpLoadComplete = createAction(
  ActionType.SIGNUP_LOAD_COMPLETE,
  props<{ signUpResponse: SignUpResponse }>(),
);

export const SignUpLoadError = createAction(
  ActionType.SIGNUP_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const SignInLoad = createAction(
  ActionType.SIGNIN_LOAD,
  props<{ signInRequest: SignInRequest }>(),
);

export const SignInLoadComplete = createAction(
  ActionType.SIGNIN_LOAD_COMPLETE,
  props<{ signInResponse: SignInResponse }>(),
);

export const SignInLoadError = createAction(
  ActionType.SIGNIN_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const LogOutLoad = createAction(ActionType.LOGOUT_LOAD, props<{ token: string }>());

export const LogOutLoadComplete = createAction(
  ActionType.LOGOUT_LOAD_COMPLETE,
  props<{ ecommerceApiResponse: EcommerceApiResponse }>(),
);

export const LogOutLoadError = createAction(
  ActionType.LOGOUT_LOAD_ERROR,
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

export const WishListLoad = createAction(ActionType.WISHLIST_LOAD, props<{ token: string }>());

export const WishListLoadComplete = createAction(
  ActionType.WISHLIST_LOAD_COMPLETE,
  props<{ wishListProducts: ProductResponse[] }>(),
);

export const WishListLoadError = createAction(
  ActionType.WISHLIST_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const AddToWishListLoad = createAction(
  ActionType.ADD_TO_WISHLIST_LOAD,
  props<{ wishListRequest: WishListRequest; token: string }>(),
);

export const AddToWishListLoadComplete = createAction(
  ActionType.ADD_TO_WISHLIST_LOAD_COMPLETE,
  props<{ addToWishListResponse: EcommerceApiResponse }>(),
);

export const AddToWishListLoadError = createAction(
  ActionType.ADD_TO_WISHLIST_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const DeleteFromWishListLoad = createAction(
  ActionType.DELETE_FROM_WISHLIST_LOAD,
  props<{ productId: number; token: string }>(),
);

export const DeleteFromWishListLoadComplete = createAction(
  ActionType.DELETE_FROM_WISHLIST_LOAD_COMPLETE,
  props<{ deleteFromWishListResponse: EcommerceApiResponse }>(),
);

export const DeleteFromWishListLoadError = createAction(
  ActionType.DELETE_FROM_WISHLIST_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);

export const DeleteAllFromWishListLoad = createAction(
  ActionType.DELETE_ALL_FROM_WISHLIST_LOAD,
  props<{ token: string }>(),
);

export const DeleteAllFromWishListLoadComplete = createAction(
  ActionType.DELETE_ALL_FROM_WISHLIST_LOAD_COMPLETE,
  props<{ deleteAllFromWishListResponse: EcommerceApiResponse }>(),
);

export const DeleteAllFromWishListLoadError = createAction(
  ActionType.DELETE_ALL_FROM_WISHLIST_LOAD_ERROR,
  props<{ error: HttpErrorResponse }>(),
);
