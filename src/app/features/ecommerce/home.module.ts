import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';
import { EcommerceFacade } from './ecommerce.facade';

import { HomeRoutingModule } from './home-routing.module';

import { ProductsResolver } from './resolvers';
import { WishListResolver } from './resolvers/wishList.resolver';
import { EcommerceService, StorageService } from './services';

import * as effects from './store/effects';
import * as fromStore from './store/reducers';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { WishListComponent } from './wishList/wishList.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SubscriptionComponent,
    ProductsComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(fromStore.featureStoreKey, fromStore.ecommerceReducers),
    EffectsModule.forFeature([...effects.list]),
  ],
  providers: [
    EcommerceFacade,
    EcommerceService,
    StorageService,
    ProductsResolver,
    WishListResolver,
  ],
})
export class HomeModule {}
