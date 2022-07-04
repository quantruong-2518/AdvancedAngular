import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
})
export class ComponentAComponent implements OnInit {
  customForm!: UntypedFormGroup;

  constructor(private pb: UntypedFormBuilder) {}

  // * Lifecycle

  ngOnInit(): void {
    this.customForm = this.pb.group({
      name: new UntypedFormControl(''),
      age: new UntypedFormControl(20),
    });
  }

  // * Methods

  submitForm() {
    const form = this.customForm.value;
    console.log(
      '🚀 ~ file: component-a.component.ts ~ line 27 ~ ComponentAComponent ~ submitForm ~ form',
      form,
    );
  }
}
