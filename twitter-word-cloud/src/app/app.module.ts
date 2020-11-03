import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import *  as omri  from 'omri-beautify';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardModule } from './dashboard-module/dashboard-module.module';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
   // fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
