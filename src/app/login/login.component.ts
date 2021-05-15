import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  checkeddata: any;
  email:any;
  password:any
  message: any;
 

  constructor(private formBuilder: FormBuilder,
    private route:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      else{
       this.checkeddata= JSON.parse(localStorage.getItem('regdata')|| '{}')
       for(let i=0;i<this.checkeddata.length;i++){
           if(this.checkeddata[i].email == this.email && this.checkeddata[i].password == this.password ){
            let index=this.checkeddata.findIndex((e:any)=>e.email== this.email)
              if(this.checkeddata[i].role==='Normal'){
                this.route.navigate(['dashboard'])
              }
              else{
                this.route.navigate(['audit'])
              }
           }
           else{
            this.message="invalid details"
           }
       }
      }
      
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
