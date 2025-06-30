import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {
searchText = '';

  payrollList = [
    {
      name: 'Alice Johnson',
      salary: 70000,
      bonus: 2000,
      deductions: 1500,
      netPay: 70500,
      status: 'Processed'
    },
    {
      name: 'Bob Smith',
      salary: 60000,
      bonus: 1500,
      deductions: 1200,
      netPay: 60300,
      status: 'Pending'
    },
    {
      name: 'Carol White',
      salary: 65000,
      bonus: 1000,
      deductions: 1000,
      netPay: 65000,
      status: 'Processed'
    }
  ];

  get filteredPayroll() {
    return this.payrollList.filter(p =>
      !this.searchText || p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
