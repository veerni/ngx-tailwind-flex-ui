import { Component, Input, HostBinding, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnChanges {
  @Input() type = 'text';
  @Input() placeholder = 'enter text here';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() maxLength?: number;
  @Input() value = '';
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() appearance: 'outline' | 'filled' | 'standard' = 'outline';
  @Input() errorMessage?: string;

  isTouched = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: any = () => {};

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes detected:', changes);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.isTouched = true;
    this.onTouched();
  }
}
