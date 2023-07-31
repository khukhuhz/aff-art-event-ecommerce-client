import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlManager } from '@core/enums';
import {
  EcommerceApiResponse,
  ProductResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  WishListRequest,
} from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class EcommerceService {
  constructor(private readonly httpClient: HttpClient) {}

  signUp(signUpRequest: SignUpRequest): Observable<SignUpResponse> {
    return this.httpClient.post<SignUpResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/users/signup`,
      signUpRequest,
    );
  }

  signIn(signInRequest: SignInRequest): Observable<SignInResponse> {
    return this.httpClient.post<SignInResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/users/signin`,
      signInRequest,
    );
  }

  logout(token: string): Observable<EcommerceApiResponse> {
    return this.httpClient.get<EcommerceApiResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/users/logout`,
      {
        params: this.getParams(token),
      },
    );
  }
  getProduct(productId: number): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products/${productId}`,
    );
  }

  getProducts(): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products`,
    );
  }

  addToWishList(wishListRequest: WishListRequest, token: string): Observable<EcommerceApiResponse> {
    return this.httpClient.post<EcommerceApiResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/wishlists`,
      wishListRequest,
      {
        params: this.getParams(token),
      },
    );
  }

  getWishList(token: string): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/wishlists`,
      {
        params: this.getParams(token),
      },
    );
  }

  deleteOneProductFromWishList(productId: number, token: string): Observable<EcommerceApiResponse> {
    return this.httpClient.delete<EcommerceApiResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/wishlists/products/${productId}`,
      {
        params: this.getParams(token),
      },
    );
  }

  deleteAllProductsFromWishList(token: string): Observable<EcommerceApiResponse> {
    return this.httpClient.delete<EcommerceApiResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/wishlists`,
      {
        params: this.getParams(token),
      },
    );
  }

  getParams(token: string) {
    return new HttpParams({
      fromObject: {
        token: token,
      },
    });
  }
}
