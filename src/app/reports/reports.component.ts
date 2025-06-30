import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AttendanceReport = { name: string; date: string; status: string };
type LeaveReport = { name: string; from: string; to: string; type: string; status: string };
type PayrollReport = { name: string; month: string; salary: number; net: number; status: string };


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  reportType: 'attendance' | 'leaves' | 'payroll' = 'attendance';
  startDate = '';
  endDate = '';

  reportTypes = [
    { label: 'Attendance Report', value: 'attendance' },
    { label: 'Leave Report', value: 'leaves' },
    { label: 'Payroll Report', value: 'payroll' }
  ];

  attendanceReports: AttendanceReport[] = [
    { name: 'Alice', date: '2025-06-28', status: 'Present' },
    { name: 'Bob', date: '2025-06-28', status: 'On Leave' }
  ];

  leaveReports: LeaveReport[] = [
    { name: 'Alice', from: '2025-06-25', to: '2025-06-27', type: 'Sick Leave', status: 'Approved' }
  ];

  payrollReports: PayrollReport[] = [
    { name: 'Bob', month: 'June', salary: 60000, net: 58800, status: 'Processed' }
  ];
}
