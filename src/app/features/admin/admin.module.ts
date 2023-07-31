import { DialogModule } from '@angular/cdk/dialog';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminFacade } from './admin.facade';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { AdminService } from './services';

import { EcommerceFacade } from '@features/ecommerce/ecommerce.facade';
import { StorageService } from '@features/ecommerce/services';
import { ProductsResolver } from './resolvers';
import * as effects from './store/effects';
import * as fromStore from './store/reducers';

@NgModule({
  declarations: [AdminComponent, ProductDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    DialogModule,
    StoreModule.forFeature(fromStore.featureStoreKey, fromStore.adminReducers),
    EffectsModule.forFeature([...effects.list]),
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    AdminService,
    StorageService,
    ProductsResolver,
    AdminFacade,
    EcommerceFacade,
  ],
})
export class AdminModule {}
