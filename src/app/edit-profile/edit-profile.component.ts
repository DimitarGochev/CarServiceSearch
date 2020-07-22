import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user = {};
  error: string;
  oldEmail: string;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  async ngOnInit() {
    if (this.route.snapshot.params.email) {
      this.oldEmail = this.route.snapshot.params.email;
      this.user = await this.userService.getUser(this.oldEmail).toPromise();
      console.log(this.user)
    }
    else {
      this.user = this.userService.user.value;
      this.oldEmail = this.user['email'];
    }
  }

  onUpdate(data: any) {
    if (this.userService.user.value.userType == 0) {
      this.userService.updateUserByAdmin(data.name, data.email, data.password, this.oldEmail).subscribe(
        resData => {
          console.log(resData);
          this.router.navigateByUrl("/allUsers");
        },
        errorResponse => {
          this.error = errorResponse.error;
        })
    }
    else {
      this.userService.updateUser(data.name, data.email, data.password, this.oldEmail).subscribe(
        resData => {
          console.log(resData);
        },
        errorResponse => {
          this.error = errorResponse.error;
        }
      )
    }
  }
}
