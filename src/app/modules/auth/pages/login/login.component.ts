import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    correo: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {}

  login(){
    // console.log(this.loginForm.value)
    this.router.navigate(['/'])
  }
}
