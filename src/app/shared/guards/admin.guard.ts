import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@features/ecommerce/services';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private readonly router: Router, private readonly storageService: StorageService) {}
  canActivate(): boolean {
    if (!this.storageService.adminUserConnected) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
