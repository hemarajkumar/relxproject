import {CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OfficersListComponent } from './officers-list/officers-list.component';
import { LoginComponent  } from './login/login.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { StoreModule } from '@ngrx/store';
import { companyUpdateReducer } from './store/company.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    OfficersListComponent,
    LoginComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    StoreModule.forRoot({companyUpdate: companyUpdateReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
