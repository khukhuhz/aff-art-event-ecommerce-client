import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductResponse } from '@core/interfaces';
import { ConfirmDialogComponent } from '@shared/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { AdminFacade } from './admin.facade';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  products$: Observable<ProductResponse[] | undefined> = this.adminFacade.products$;

  constructor(private readonly dialog: Dialog, private readonly adminFacade: AdminFacade) {}

  onOpenDialog(productResponse?: ProductResponse): void {
    this.dialog.open(ProductDialogComponent, {
      data: productResponse,
    });
  }

  onOpenConfirmationDialog(productId?: number): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: productId,
    });
  }
}
