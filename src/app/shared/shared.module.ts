import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminFacade } from '@features/admin/admin.facade';
import { StorageService } from '@features/ecommerce/services';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FooterModule } from './modules/footer';
import { HeaderModule } from './modules/header';
import { SafePipe } from './pipes';

@NgModule({
  declarations: [SafePipe, ConfirmDialogComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderModule, FooterModule],
  providers: [StorageService, AdminFacade],
  exports: [FormsModule, ReactiveFormsModule, HeaderModule, FooterModule, SafePipe],
})
export class SharedModule {}
