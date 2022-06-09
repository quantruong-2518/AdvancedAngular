import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
})
export class ComponentAComponent implements OnInit {
  customForm!: FormGroup;

  constructor(private pb: FormBuilder) {}

  ngOnInit(): void {
    this.customForm = this.pb.group({
      name: new FormControl(''),
      age: new FormControl(20),
    });
  }
}
