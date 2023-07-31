import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListGuard } from '@shared/guards';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductsResolver, WishListResolver } from './resolvers';
import { SubscriptionComponent } from './subscription/subscription.component';
import { WishListComponent } from './wishList/wishList.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SubscriptionComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: {
      products: ProductsResolver,
    },
  },
  {
    path: 'wishlist',
    component: WishListComponent,
    canActivate: [WishListGuard],
    resolve: {
      wishlist: WishListResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
