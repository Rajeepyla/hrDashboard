import { Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { EmployeesComponent } from './employees/employees.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashbaordComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'attendance',
    component: AttendenceComponent
  },
  {
    path: 'leaves',
    component: LeaveRequestComponent
  },
  {
    path: 'payroll',
    component: PayrollComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  },{
    path:'reports',
    component: ReportsComponent
  }
];
