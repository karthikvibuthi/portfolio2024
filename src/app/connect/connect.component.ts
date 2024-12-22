import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {
  connectForm = new FormGroup({
    email: new FormControl('', {validators:[Validators.required,Validators.email]}),
    name: new FormControl('', {validators:[Validators.required, Validators.minLength(8)]}),
  });

  onSubmit() {
    if (this.connectForm.valid) {
      console.log('Form Data:', this.connectForm.value);
      alert('Form submitted successfully!');
    }
  }
}
