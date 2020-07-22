import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;
  userEmail: string = "";
  userType: number;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userSub = this.userService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if(this.isAuthenticated) {
      this.userEmail = user.email;
      this.userType = user.userType;
      }
    });
  }

  logOut() {
   this.userService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
