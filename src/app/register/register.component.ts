import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  regdata: any=[]

  constructor(private formBuilder: FormBuilder,
    private route:Router) { }

  ngOnInit() {
    
      this.registerForm = this.formBuilder.group({
          role: ['', Validators.required],
          firstName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      }, 
      );
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        console.log("csll")
          return;
      }
      else{
        this.regdata= JSON.parse(localStorage.getItem('regdata')|| '[]')
        this.regdata.push(this.registerForm.value)
        localStorage.setItem("regdata", JSON.stringify(this.regdata));
        this.route.navigate(['login'])
      }
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
