import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagCloudModule } from 'angular-tag-cloud-module';

/*
 *Import Components After this
 */
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { SidebarComponent } from './sidebar-component/sidebar-component.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { SearchUtilComponent } from './main-dashboard/search-util/search-util.component';
import { TrendsComponent } from './main-dashboard/trends/trends.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MainDashboardComponent,
    PolarAreaComponent,
    WordCloudComponent,
    SearchUtilComponent,
    TrendsComponent,
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TagCloudModule,
  ],
})
export class DashboardModule {}
