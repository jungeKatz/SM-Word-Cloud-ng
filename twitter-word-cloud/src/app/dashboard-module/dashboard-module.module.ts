import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { SidebarComponent } from './sidebar-component/sidebar-component.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';

@NgModule({
  declarations: [SidebarComponent, MainDashboardComponent, PolarAreaComponent],
  imports: [CommonModule, DashboardModuleRoutingModule],
})
export class DashboardModule {}
