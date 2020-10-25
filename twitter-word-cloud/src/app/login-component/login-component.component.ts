import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private rtr: Router) {}

  ngOnInit(): void {
    this.makeLoginForm();
  }

  makeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('called submit');
    this.rtr.navigate(['/dashboard']);
  }
}
