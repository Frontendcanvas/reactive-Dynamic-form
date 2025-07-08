import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'user-form',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  defaultType:string=""
  onSubmit(formData: NgForm) {
    console.log('Form submitted!',formData.form, formData.form.value);
    // Do something with:
    // form.value.field and form.value.type
  }
}
