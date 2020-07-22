import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  error: string;

  ngOnInit() {
  }

  onRegister(data: any) {
    console.log(data)
    this.userService.register(data.name, data.email, data.pswd, data.userType).subscribe(
      resData => {
        alert("Registration successful");
        this.router.navigateByUrl("/");
      } ,
      errorResponse => {
        this.error = errorResponse.error;
      }
    )
  }
}
