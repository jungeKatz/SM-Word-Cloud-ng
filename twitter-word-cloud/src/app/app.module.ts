import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TagCloudModule } from 'angular-tag-cloud-module';
import {HttpClientModule} from '@angular/common/http';
// import *  as omri  from 'omri-beautify';


import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardModule } from './dashboard-module/dashboard-module.module';

@NgModule({
  declarations: [AppComponent, LoginComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    TagCloudModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
