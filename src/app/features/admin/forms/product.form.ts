import { FormControl } from '@angular/forms';

export interface ProductForm {
  productName: FormControl<string>;
  imageURL: FormControl<File | string>;
  price: FormControl<number>;
  description: FormControl<string>;
}
