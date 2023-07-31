import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { EcommerceFacade } from '../ecommerce.facade';
import { WishListComponent } from './wishList.component';

describe('WishListComponent', () => {
  let spectator: Spectator<WishListComponent>;
  const createComponent = createComponentFactory<WishListComponent>({
    component: WishListComponent,
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
