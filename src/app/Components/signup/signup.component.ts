import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserAlt, faEyeSlash, faEnvelope} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  faUserAlt = faUserAlt;
  faEyeSlash = faEyeSlash;
  faEnvelope = faEnvelope;

  constructor( private fb: FormBuilder){};

  ngOnInit() {
    this.loginForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  onSubmit() {   
    console.log(this.loginForm.value);
  }

  hideShowPass(){}
}
