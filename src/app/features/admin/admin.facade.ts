import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductRequest, ProductResponse } from '@core/interfaces';
import * as fromStore from '@features/admin/store';
import { ProductsLoad } from '@features/admin/store';
import { StorageService } from '@features/ecommerce/services';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { ProductForm } from './forms';

@Injectable()
export class AdminFacade {
  products$: Observable<ProductResponse[] | undefined> = this.store.select(
    fromStore.selectProductsResponse,
  );

  productForm: FormGroup<ProductForm> = this.formBuilder.group<ProductForm>({
    productName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
      nonNullable: true,
    }),
    imageURL: new FormControl(),
    price: new FormControl(0.0, {
      validators: [Validators.required, Validators.pattern('^[0-9]*$')],
      nonNullable: true,
    }),
    description: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    private readonly store: Store,
    private readonly formBuilder: FormBuilder,
    private readonly storageService: StorageService,
  ) {}

  loadProduct(): void {
    this.store.dispatch(ProductsLoad());
  }

  createProduct(productRequest: ProductRequest): void {
    this.store.dispatch(
      fromStore.CreateProduct({ productRequest: productRequest, token: this.storageService.token }),
    );
  }

  updateProduct(productId: number, productRequest: ProductRequest): void {
    this.store.dispatch(
      fromStore.UpdateProduct({
        productId: productId,
        productRequest: productRequest,
        token: this.storageService.token,
      }),
    );
  }

  deleteProduct(productId: number): void {
    this.store.dispatch(
      fromStore.DeleteProduct({
        productId: productId,
        token: this.storageService.token,
      }),
    );
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target!.result!.toString()));
    return result;
  }
}
