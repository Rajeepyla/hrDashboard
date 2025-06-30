import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primary-navigation',
  standalone: true,
  imports: [],
  templateUrl: './primary-navigation.component.html',
  styleUrl: './primary-navigation.component.scss'
})
export class PrimaryNavigationComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
