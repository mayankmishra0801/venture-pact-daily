// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student-data',
//   templateUrl: './student-data.component.html',
//   styleUrls: ['./student-data.component.css']
// })
// export class StudentDataComponent {
//   onSubmit(data: any){
//     console.warn(data);
//   }

// }



import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { CustomvalidationService } from '../services/customvalidation.service';
import { CustomvalidationService } from '../services/customvalidation.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: "./student-data.component.html",
  // templateUrl:'./reactive-from.component.html',
  // templateUrl: './reactive-form.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }
}
