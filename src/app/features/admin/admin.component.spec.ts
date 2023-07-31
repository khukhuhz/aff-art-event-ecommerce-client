import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { AdminComponent } from './admin.component';
import { AdminFacade } from './admin.facade';

describe('AdminComponent', () => {
  let spectator: Spectator<AdminComponent>;
  const createComponent = createComponentFactory<AdminComponent>({
    component: AdminComponent,
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
