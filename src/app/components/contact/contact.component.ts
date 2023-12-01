import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formValid = false;
  contactForm = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    subject: [null, Validators.required],
    message: [null, Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}
  onSubmitForm() {
    
    this.formValid=true
    setTimeout(()=>{
      this.formValid=false
      this.contactForm.reset()
    },3000)
    
  }
}
