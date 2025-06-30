import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendence',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.scss'
})
export class AttendenceComponent {
 searchText = '';
  selectedDate = '';

  attendanceData = [
    { name: 'Alice Johnson', date: '2025-06-29', status: 'Present' },
    { name: 'Bob Smith', date: '2025-06-29', status: 'On Leave' },
    { name: 'Carol White', date: '2025-06-29', status: 'Late' },
    { name: 'David Brown', date: '2025-06-29', status: 'Absent' }
  ];

  get filteredData() {
    return this.attendanceData.filter(entry =>
      (!this.searchText || entry.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.selectedDate || entry.date === this.selectedDate)
    );
  }
}
