// apps/playground/src/app/components/button-demo/button-demo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@ngx-tailwind-flex-ui';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
  isLoading = false;
  isToggled = false;

  toggleLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  toggleButton() {
    this.isToggled = !this.isToggled;
  }
}
