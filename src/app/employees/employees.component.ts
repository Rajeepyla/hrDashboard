import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
 searchText = '';

  employees = [
    { name: 'ABC', email: 'ABC@company.com', department: 'HR', status: 'Active' },
    { name: 'DEF', email: 'def@company.com', department: 'Engineering', status: 'On Leave' },
    { name: 'GHI', email: 'ghil@company.com', department: 'Marketing', status: 'Inactive' },
    { name: 'JKL', email: 'jkl@company.com', department: 'Finance', status: 'Active' }
  ];

  get filteredEmployees() {
    if (!this.searchText.trim()) return this.employees;
      const search = this.searchText.toLowerCase();
    return this.employees.filter(emp =>
      emp.name.toLowerCase().includes(search) ||
      emp.email.toLowerCase().includes(search) ||
      emp.department.toLowerCase().includes(search)
    );
  }
}
