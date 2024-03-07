import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserAlt, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;
  type: string = 'password';
  faUserAlt = faUserAlt;
  faEyeSlash = faEyeSlash;

  constructor( private fb: FormBuilder){};

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {   
    console.log(this.loginForm.value);
  }

  hideShowPass(){}
}
