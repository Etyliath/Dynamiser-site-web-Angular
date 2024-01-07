import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formValid = false;
  submitted = false;
  messageAlert = '';
  classAlert = '';
  contactForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}
  onSubmitForm() {
    this.submitted = true;
    this.formValid = true;
    if (this.contactForm.invalid) {
      this.classAlert = 'alert alert-danger';
      this.messageAlert = 'votre formulaire est mal remplit';
    }
    if (!this.contactForm.invalid) {
      this.messageAlert = `Merci pour votre message ${this.contactForm.value.firstName} ${this.contactForm.value.lastName} `;
      this.classAlert = 'alert alert-success';
      setTimeout(() => {
        this.submitted = false;
        this.formValid = false;
        this.contactForm.reset();
      }, 3000);
    }
  }
}
