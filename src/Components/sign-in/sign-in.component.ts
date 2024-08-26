import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signUpForm: FormGroup;
  apiError: string | null = null;
  post: any;
  authKey: any;
  btnName: any;

  constructor(private commonService: CommonService, private fb: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      agree: [false]
    })
  }

  ngOnInit() {
    this.commonService.getdata().subscribe(response => {
      console.log(response)
    });
    this.authKey = localStorage.getItem('auth');
    if (!this.authKey) {
      this.btnName = 'SignUp';
    } else {
      this.btnName = "Login"

    }
  }



  signUp() {
    console.log('sign up');
    if (this.signUpForm.valid) {
      const data = {
        name: this.signUpForm.get('name')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value
      };
      this.commonService.signUp(data).subscribe({
        next: res => {
          this.apiError = null; // Clear any previous error 
          if (res) {
            localStorage.setItem('auth', res.token)
            this.authKey = res.token;
            this.router.navigate(['/'])
          }
        },
        error: err => {
          console.error(err);
          this.apiError = err.error.message || 'An error occurred during sign up';
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }


  signIn() {
    console.log('sign In');
    if (this.signUpForm.valid) {
      const data = {
        name: this.signUpForm.get('name')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value
      };
      this.commonService.signUp(data).subscribe({
        next: res => {
          console.log(res);
          localStorage.setItem('auth', res.token)
          this.authKey = res.token;
          this.apiError = null; // Clear any previous error
        },
        error: err => {
          console.error(err);
          this.apiError = err.error.message || 'An error occurred during sign up';
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
