import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductRequest, ProductResponse } from '@core/interfaces';

import { AdminFacade } from '../admin.facade';
import { ProductForm } from '../forms';

@Component({
  selector: 'app-product-dialog',
  templateUrl: 'product-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDialogComponent {
  isUpdate: boolean = !!this.data;
  create = 'Création';
  update = 'Modification';
  base64Output: string = '';

  constructor(
    private readonly adminFacade: AdminFacade,
    private readonly dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: ProductResponse,
  ) {
    this.adminFacade.productForm.patchValue(this.data ? this.data : {});
  }

  get productForm(): FormGroup<ProductForm> {
    return this.adminFacade.productForm;
  }

  get productName(): FormControl<string> {
    return this.adminFacade.productForm.controls.productName;
  }

  get imageURL(): FormControl<File | string> {
    return this.adminFacade.productForm.controls.imageURL;
  }

  get price(): FormControl<number> {
    return this.adminFacade.productForm.controls.price;
  }

  get description(): FormControl<string> {
    return this.adminFacade.productForm.controls.description;
  }

  uploadFile(event: Event) {
    this.productForm.patchValue({
      imageURL: (event.target as HTMLInputElement).files![0],
    });
    this.productForm.controls.imageURL.updateValueAndValidity();
    this.adminFacade
      .convertFile(this.imageURL.value as File)
      .subscribe((data) => (this.base64Output = data));
  }

  onSubmit() {
    const producRequest: ProductRequest = {
      ...this.productForm.getRawValue(),
      image: this.base64Output ? this.base64Output : this.data.image,
      categoryId: 1,
    };
    if (this.data?.productId) {
      this.adminFacade.updateProduct(this.data.productId, producRequest);
    } else {
      this.adminFacade.createProduct(producRequest);
    }
    this.onClose();
    this.onRest();
  }

  onClose(): void {
    this.dialogRef.close();
    this.onRest();
  }

  onRest(): void {
    this.productForm.reset();
  }
}
