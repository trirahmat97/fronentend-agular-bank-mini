import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardUserComponent } from './users/dashboard-u/dashboard-user.component';

import {AuthGuard} from './guard/auth.guard';
import { LoginComponent } from './loginpage/login/login.component';
import { TransactionFormComponent } from './users/transaction/transaction-form.component';
import { UbahpinComponent } from './users/pin/ubahpin.component';
import { HistoryUserComponent } from './users/history/history-user.component';
import { RegisterComponent } from './loginpage/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
import { AddAdminCustomerComponent } from './admin/customer/form/add-admin-customer.component';
import { AdminAccountComponent } from './admin/account/admin-account.component';
import { AdminTransactionComponent } from './admin/transaction/admin-transaction.component';
import { AdminCustomerComponent } from './admin/customer/admin-customer.component';
import { AddBalanceComponent } from './admin/form/add-balance.component';
import { ProfileaComponent } from './admin/profilea/profilea.component';
import { StatusCustomerComponent } from './admin/statusc/status-customer.component';
import { StatusAccountComponent } from './admin/statusa/status-account.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'dashboardu',
    component: DashboardUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'transaction',
    component: TransactionFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'historiall',
    component: HistoryUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'ubahpin',
    component: UbahpinComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboarda',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'customera',
    component: AdminCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'accounta',
    component: AdminAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'transaksia',
    component: AdminTransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'addbalance',
    component: AddBalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'addcustomer',
    component: AddAdminCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profilea',
    component: ProfileaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'statusc',
    component: StatusCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'statusa',
    component: StatusAccountComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
