<<<<<<< HEAD
import { Component, forwardRef, Input, OnInit } from '@angular/core';
=======
import { Component, forwardRef, OnInit } from '@angular/core';
>>>>>>> 1b885bdb918bb8ddb8abb9d44b272e46f2af2ef6
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
<<<<<<< HEAD
  @Input() readonly = false;

=======
>>>>>>> 1b885bdb918bb8ddb8abb9d44b272e46f2af2ef6
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
<<<<<<< HEAD
  }
  setDisabledState(isDisable: boolean) {
    this.readonly = isDisable;
=======
>>>>>>> 1b885bdb918bb8ddb8abb9d44b272e46f2af2ef6
  }

  // * Methods

  onKeyUp(e: any) {
    this.key = e.target.value;
    this.onInputChange(this.key);
    // this.onInputTouched();
  }
}
