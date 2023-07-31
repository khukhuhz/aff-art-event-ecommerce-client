import { Component } from '@angular/core';
import { EcommerceFacade } from '@features/ecommerce/ecommerce.facade';
import { StorageService } from '@features/ecommerce/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isConnected: boolean = this.storageService.simpleUserConnected;
  isConnectedAdmin: boolean = this.storageService.adminUserConnected;

  constructor(
    private readonly storageService: StorageService,
    private readonly ecommerceFacade: EcommerceFacade,
  ) {}

  logOut(): void {
    this.ecommerceFacade.logOut();
    this.isConnected = false;
    this.isConnectedAdmin = false;
  }

  checkConnection() {
    this.isConnected = this.storageService.simpleUserConnected;
    this.isConnectedAdmin = this.storageService.adminUserConnected;
  }
}
