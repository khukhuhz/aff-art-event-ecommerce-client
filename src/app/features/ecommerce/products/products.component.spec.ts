import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { EcommerceFacade } from '../ecommerce.facade';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let spectator: Spectator<ProductsComponent>;
  const createComponent = createComponentFactory<ProductsComponent>({
    component: ProductsComponent,
    providers: [MockProvider(EcommerceFacade)],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  });

  beforeEach(async () => {
    spectator = createComponent({
      props: {},
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
