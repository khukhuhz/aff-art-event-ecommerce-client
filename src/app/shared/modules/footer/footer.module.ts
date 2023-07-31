import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from '@features/admin/admin-routing.module';
import { HomeRoutingModule } from '@features/ecommerce/home-routing.module';

// import { completeIconSet, Icon } from '@bcef/ia-icons';
// import { IconsModule, IconsRegistry } from '@bcef/ia-ng-icons';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, HomeRoutingModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
