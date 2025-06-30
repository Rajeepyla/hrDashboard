import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Input() isCollapsed = false;

  navItems = [
    { label: 'Dashboard', icon: 'bi bi-speedometer2', route: '/dashboard' },
    { label: 'Employees', icon: 'bi bi-people', route: '/employees' },
    { label: 'Attendance', icon: 'bi bi-calendar-check', route: '/attendance' },
    { label: 'Leave Requests', icon: 'bi bi-box-arrow-in-right', route: '/leaves' },
    { label: 'Payroll', icon: 'bi bi-currency-dollar', route: '/payroll' },
    { label: 'Reports', icon: 'bi bi-file-earmark-bar-graph', route: '/reports' },
    { label: 'Settings', icon: 'bi bi-gear', route: '/settings' }
  ];

  ngOnInit(): void {
    this.updateCollapseState(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateCollapseState(event.target.innerWidth);
  }

  updateCollapseState(width: number): void {
    this.isCollapsed = width < 768;
  }
}
