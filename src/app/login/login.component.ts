import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(data: any) {
    this.userService.login(data.email, data.pswd).subscribe(
      resData => {
        console.log("logged");
        this.router.navigateByUrl("/cars");
      } ,
      errorResponse => {
        this.error = errorResponse.error;
      }
    )
  }

}
