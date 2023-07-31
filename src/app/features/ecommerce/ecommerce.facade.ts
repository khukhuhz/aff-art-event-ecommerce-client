import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  EcommerceApiResponse,
  ProductResponse,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  WishListRequest,
} from '@core/interfaces';
import * as fromStore from '@features/ecommerce/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LoginForm,
  passwordMatchingValidatior,
  PasswordStrengthValidator,
  SubscriptionForm,
} from './forms';
import { StorageService } from './services';

@UntilDestroy()
@Injectable()
export class EcommerceFacade {
  wishList: number[] | undefined;
  signUpResponse$: Observable<SignUpResponse | undefined> = this.store.select(
    fromStore.selectSignUpResponse,
  );

  signInResponse$: Observable<SignInResponse | undefined> = this.store.select(
    fromStore.selectSignInResponse,
  );

  lougOutResponse$: Observable<EcommerceApiResponse | undefined> = this.store.select(
    fromStore.selectLogoutResponse,
  );

  products$: Observable<ProductResponse[] | undefined> = this.store.select(
    fromStore.selectProductsResponse,
  );

  wishList$: Observable<ProductResponse[] | undefined> = this.store.select(
    fromStore.selectWishListResponse,
  );

  wishListIds$: Observable<number[] | undefined> = this.store.select(fromStore.selectWishListIds);

  loginForm: FormGroup<LoginForm> = this.formBuilder.group<LoginForm>({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, PasswordStrengthValidator],
      nonNullable: true,
    }),
  });

  signUpForm: FormGroup<SubscriptionForm> = this.formBuilder.group<SubscriptionForm>(
    {
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
        nonNullable: true,
      }),
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
        nonNullable: true,
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required, PasswordStrengthValidator],
        nonNullable: true,
      }),
      confirmedPassword: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    },
    { validators: passwordMatchingValidatior },
  );

  constructor(
    private readonly store: Store,
    private readonly formBuilder: FormBuilder,
    private readonly storageService: StorageService,
    private readonly router: Router,
  ) {
    this.store
      .pipe(select(fromStore.selectWishListIds), untilDestroyed(this))
      .subscribe((productIdList: number[] | undefined) => {
        this.wishList = productIdList;
      });
  }

  signUp(signUpRequest: SignUpRequest): void {
    this.store.dispatch(fromStore.SignUpLoad({ signUpRequest: signUpRequest }));
  }

  signIn(): void {
    this.store.dispatch(fromStore.SignInLoad({ signInRequest: this.loginForm.getRawValue() }));
  }

  logOut(): void {
    this.store.dispatch(fromStore.LogOutLoad({ token: this.storageService.token }));
  }

  addToWishList(wishListRequest: WishListRequest): void {
    this.store.dispatch(
      fromStore.AddToWishListLoad({
        wishListRequest: wishListRequest,
        token: this.storageService.token,
      }),
    );
  }

  loadWishList(): void {
    this.store.dispatch(fromStore.WishListLoad({ token: this.storageService.token }));
  }

  deleteOneProductFromWishList(productId: number): void {
    this.store.dispatch(
      fromStore.DeleteFromWishListLoad({
        productId: productId,
        token: this.storageService.token,
      }),
    );
  }

  manageWishList(productId: number) {
    if (!this.storageService.isConnected) {
      this.router.navigate(['/login']);
    } else {
      if (!this.isFavouriteProduct(productId)) {
        this.wishList?.push(productId);
        this.addToWishList({ productId: productId });
      } else {
        this.wishList = this.wishList?.filter((item) => item !== productId);
        this.deleteOneProductFromWishList(productId);
      }
    }
  }

  isFavouriteProduct(productId: number): boolean {
    return this.wishList!.includes(productId);
  }
}
