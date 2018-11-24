import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading: boolean;
  private login$: Subscription;
  loginForm: FormGroup;


  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userNameProlinkAdmin: new FormControl(null, Validators.required),
      passwordProlinkAdmin: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.login$) {
      this.login$.unsubscribe();
    }
  }

  submitForm() {
    this.loading = true;
    this.login$ = this.userService.login(this.loginForm.value.userNameProlinkAdmin, this.loginForm.value.passwordProlinkAdmin).subscribe(
      rsp => {
        this.loading = false;
      }, error => {
        this.loading = false;
      }
    );
  }

}
