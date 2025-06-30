import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.scss'
})
export class DashbaordComponent {
  summary = [
    { label: 'Employees', value: 128, icon: 'bi bi-people', color: 'primary' },
    { label: 'On Leave Today', value: 5, icon: 'bi bi-calendar-minus', color: 'warning' },
    { label: 'Pending Approvals', value: 12, icon: 'bi bi-hourglass-split', color: 'danger' },
    { label: 'Payroll Processed', value: '98%', icon: 'bi bi-currency-dollar', color: 'success' }
  ];

  recentActivities = [
    'Alice applied for leave - 1h ago',
    'Bob marked attendance - 2h ago',
    'New employee John added - 3h ago'
  ];

  employees = [
    { name: 'Alice Johnson', department: 'HR', status: 'Active' },
    { name: 'Bob Smith', department: 'Engineering', status: 'On Leave' },
    { name: 'Carol White', department: 'Marketing', status: 'Active' }
  ];
}
