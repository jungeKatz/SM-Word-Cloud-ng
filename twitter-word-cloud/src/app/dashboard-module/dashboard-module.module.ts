import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { SidebarComponent } from './sidebar-component/sidebar-component.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, DashboardModuleRoutingModule],
})
export class DashboardModule {}
