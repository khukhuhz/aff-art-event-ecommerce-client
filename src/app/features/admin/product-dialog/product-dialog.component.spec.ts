import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { AdminFacade } from '../admin.facade';

import { ProductDialogComponent } from './product-dialog.component';

describe('ProductDialogComponent', () => {
  let spectator: Spectator<ProductDialogComponent>;
  const createComponent = createComponentFactory<ProductDialogComponent>({
    component: ProductDialogComponent,
    providers: [MockProvider(AdminFacade)],
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
