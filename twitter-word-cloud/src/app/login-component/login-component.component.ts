import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private fb: FormBuilder,
    private rtr: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.userValue) {
      this.rtr.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.makeLoginForm();

    this.returnUrl =
      this.route.snapshot.queryParams[`returnUrl`] || '/dashboard';
  }
  makeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }


  // tslint:disable-next-line: typedef
  get f() {
    return this.loginForm.controls;
  }




  onSubmit(): void {
    this.submitted = true;

        // stop here if form is invalid
    if (this.loginForm.invalid) {
            return; }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value).
    pipe(first()).subscribe( data => {
      this.rtr.navigate([this.returnUrl]);
  },
  error => {
      this.error = error;
      this.loading = false;
  });




   // this.rtr.navigate(['/dashboard']);
  }

  goToTwitter(): void {

    
  }
}
