import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlManager } from '@core/enums';
import { EcommerceApiResponse, ProductRequest, ProductResponse } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {
  constructor(private readonly httpClient: HttpClient) {}

  createProduct(productRequest: ProductRequest, token: string): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products`,
      productRequest,
      {
        params: this.getParams(token) || '',
      },
    );
  }

  updateProduct(
    productId: number,
    productRequest: ProductRequest,
    token: string,
  ): Observable<ProductResponse> {
    return this.httpClient.put<ProductResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products/${productId}`,
      productRequest,
      {
        params: this.getParams(token),
      },
    );
  }

  getProducts(): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products`,
    );
  }

  getProduct(productId: number): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products/${productId}`,
    );
  }

  deleteProduct(productId: number, token: string): Observable<EcommerceApiResponse> {
    return this.httpClient.delete<EcommerceApiResponse>(
      `${UrlManager.BASE_URL}/e-commerce-api/v1/products/${productId}`,
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
