import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AdminFacade } from '@features/admin/admin.facade';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(
    private readonly adminFacade: AdminFacade,
    private readonly dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: number,
  ) {}

  onSubmit() {
    this.data && this.adminFacade.deleteProduct(this.data);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
