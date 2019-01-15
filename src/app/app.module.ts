import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

import {AuthGuard} from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardUserComponent } from './users/dashboard-u/dashboard-user.component';
import { TopnavigasiComponent } from './users/topnavigasi/topnavigasi.component';
import { FooterUComponent } from './users/footer/footer-u.component';
import { RegisterComponent } from './loginpage/register/register.component';
import { LoginComponent } from './loginpage/login/login.component';
import { TransactionFormComponent } from './users/transaction/transaction-form.component';
import { UbahpinComponent } from './users/pin/ubahpin.component';
import { HistoryUserComponent } from './users/history/history-user.component';

import{MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminAccountComponent } from './admin/account/admin-account.component';
import { AdminCustomerComponent } from './admin/customer/admin-customer.component';
import { AddAdminCustomerComponent } from './admin/customer/form/add-admin-customer.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { AddBalanceComponent } from './admin/form/add-balance.component';
import { AdminTransactionComponent } from './admin/transaction/admin-transaction.component';
import { TopnavigasiaComponent} from './admin/topnavigasia/topnavigasia.component';
import { FooterAComponent } from './admin/footera/footer-a.component';
import { ProfileaComponent } from './admin/profilea/profilea.component';
import { StatusCustomerComponent } from './admin/statusc/status-customer.component';
import { StatusAccountComponent } from './admin/statusa/status-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardUserComponent,
    TopnavigasiComponent,
    FooterUComponent,
    RegisterComponent,
    LoginComponent,
    TransactionFormComponent,
    UbahpinComponent,
    HistoryUserComponent,
    ProfileComponent,
    AdminAccountComponent,
    AdminCustomerComponent,
    AddAdminCustomerComponent,
    AdminDashboardComponent,
    AddBalanceComponent,
    AdminTransactionComponent,
    TopnavigasiaComponent,
    FooterAComponent,
    ProfileaComponent,
    StatusCustomerComponent,
    StatusAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
