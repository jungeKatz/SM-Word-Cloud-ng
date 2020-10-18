import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';


@NgModule({
  declarations: [SidebarComponentComponent],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule
  ]
})
export class DashboardModuleModule { }
