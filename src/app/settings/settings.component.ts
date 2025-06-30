import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  settings = {
    companyName: 'HR Corp Pvt. Ltd.',
    timezone: 'Asia/Kolkata',
    enableDarkMode: false,
    emailNotifications: true
  };

  timezones = [
    'Asia/Kolkata',
    'UTC',
    'America/New_York',
    'Europe/London',
    'Asia/Singapore'
  ];

  saveSettings() {
    console.log('Saved Settings:', this.settings);
    alert('Settings saved successfully!');
  }
}
