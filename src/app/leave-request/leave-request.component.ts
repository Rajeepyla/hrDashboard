import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.scss'
})
export class LeaveRequestComponent {
 searchText = '';
  selectedStatus = '';

  leaveRequests = [
    {
      name: 'Alice Johnson',
      type: 'Sick Leave',
      from: '2025-06-28',
      to: '2025-06-30',
      reason: 'Flu symptoms',
      status: 'Pending'
    },
    {
      name: 'Bob Smith',
      type: 'Casual Leave',
      from: '2025-06-25',
      to: '2025-06-26',
      reason: 'Personal work',
      status: 'Approved'
    },
    {
      name: 'Carol White',
      type: 'Annual Leave',
      from: '2025-07-01',
      to: '2025-07-10',
      reason: 'Family vacation',
      status: 'Rejected'
    }
  ];

  get filteredRequests() {
    return this.leaveRequests.filter(req =>
      (!this.searchText || req.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.selectedStatus || req.status === this.selectedStatus)
    );
  }
}
