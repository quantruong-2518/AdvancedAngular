import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Child1Component),
      multi: true,
    },
  ],
})
export class Child1Component implements OnInit, ControlValueAccessor {
  key = '';

  onInputChange = (key: string): string => key;
  onInputTouched = () => {};

  constructor() {}

  // * Lifecycle

  ngOnInit(): void {}

  // * CVA implementations

  writeValue(inputData: string): void {
    this.key = inputData;
  }
  registerOnChange(fn: any): void {
    this.onInputChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onInputTouched = fn;
  }

  // * Methods

  onKeyUp(e: any) {
    this.key = e.target.value;
    this.onInputChange(this.key);
    // this.onInputTouched();
  }
}
