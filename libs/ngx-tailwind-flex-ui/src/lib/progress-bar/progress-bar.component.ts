import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lib-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  imports: [CommonModule],
})
export class ProgressBarComponent {
  /** Types: 'determinate' | 'indeterminate' | 'buffer' | 'query' */
  @Input() variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'determinate';

  /** Primary progress percentage (0-100) */
  @Input() progress = 80;

  /** Buffer progress (for buffer variant, 0-100) */
  @Input() bufferProgress = 100;

  /** Color options */
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' = 'primary';

  @Input() class = ''; // Allow users to pass custom Tailwind classes

  

  private readonly colorMap = {
    primary: 'bg-blue-500', // Default
    secondary: 'bg-yellow-500',
    success: 'bg-green-500',
    error: 'bg-red-500', // Warning
  };

  /** Map color variants to Tailwind CSS classes */
  @HostBinding('class')
  get progressBarClass(): string {
    return this.colorMap[this.color] || 'bg-blue-500';
  }
}
