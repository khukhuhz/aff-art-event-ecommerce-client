import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@features/ecommerce/services';

@Injectable({
  providedIn: 'root',
})
export class WishListGuard {
  constructor(private readonly router: Router, private readonly storageService: StorageService) {}
  canActivate(): boolean {
    if (!this.storageService.simpleUserConnected) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
