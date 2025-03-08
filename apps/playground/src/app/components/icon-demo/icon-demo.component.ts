// apps/playground/src/app/components/icon-demo/icon-demo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@ngx-tailwind-flex-ui';

@Component({
  selector: 'app-icon-demo',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-demo.component.html',
})
export class IconDemoComponent {
  selectedIcon = 'home';
  animatedIcon = false;

  // Array of common Material Icons to showcase
  commonIcons = [
    'home',
    'search',
    'favorite',
    'settings',
    'person',
    'mail',
    'notifications',
    'menu',
    'close',
    'check',
    'star',
    'delete',
    'edit',
    'add',
    'remove',
  ];

  // Array of icon categories with their icons
  iconCategories = [
    {
      name: 'Navigation',
      icons: [
        'home',
        'menu',
        'arrow_back',
        'arrow_forward',
        'expand_more',
        'expand_less',
        'more_vert',
      ],
    },
    {
      name: 'Actions',
      icons: [
        'search',
        'settings',
        'edit',
        'delete',
        'add',
        'remove',
        'check',
        'close',
      ],
    },
    {
      name: 'Communication',
      icons: ['mail', 'message', 'chat', 'phone', 'email', 'contacts'],
    },
    {
      name: 'Status',
      icons: ['error', 'warning', 'info', 'help', 'check_circle', 'done'],
    },
  ];

  // Color options for icon showcase
  colorOptions = [
    { name: 'Default', class: 'text-gray-500' },
    { name: 'Primary', class: 'text-blue-600' },
    { name: 'Success', class: 'text-green-600' },
    { name: 'Warning', class: 'text-yellow-500' },
    { name: 'Danger', class: 'text-red-600' },
    { name: 'Info', class: 'text-purple-600' },
  ];

  toggleAnimation() {
    this.animatedIcon = !this.animatedIcon;
  }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
