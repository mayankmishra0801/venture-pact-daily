import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent {
    loginForm = new FormGroup({
      user:new FormControl('',[Validators.required,Validators.pattern('[azA-Z]+$')]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    })

    loginUser(){
      console.warn(this.loginForm.value);
    }

    get user(){
      return this.loginForm.get('user')
    }

    get password(){
        return this.loginForm.get('password')
    }
}


// import { Component } from "@angular/core";
// import { User } from "../models/user";

// @Component({
//   selector: "app-template-driven-form",
//   templateUrl: "./template-driven-form.component.html",
//   styleUrls: ["./template-driven-form.component.scss"],
// })
// export class TemplateDrivenFormComponent {
//   protected userModal = new User();

//   protected onSubmit() {
//     alert(
//       "Form Submitted succesfully!!!\n Check the values in browser console."
//     );
//     console.table(this.userModal);
//   }

//   protected resetForm(): void {
//     this.userModal = new User();
//   }
// }
