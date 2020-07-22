import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.scss']
})
export class ListAllUsersComponent implements OnInit {

  allUsers = {};
  error: string;

  displayedColumns: string[] = ['name', 'userType', 'edit', 'delete'];
  dataSource: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.allUsers = users;
        console.log(this.allUsers);
        this.formatUsers();
        this.dataSource = this.allUsers;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  formatUsers() {
    for (let key in this.allUsers) {
      if (this.allUsers[key].userType == 0) {
        this.allUsers[key].userType = 'Admin';
      }
      if (this.allUsers[key].userType == 1) {
        this.allUsers[key].userType = 'User';
      }
      if (this.allUsers[key].userType == 2) {
        this.allUsers[key].userType = 'Service';
      }
    }
  }

  updateUser(email: string) {
    this.router.navigateByUrl(`profile/${email}`);
  }

  deleteUser(email: string) {
    this.userService.deleteUser(email).subscribe(
      () => {
        for (let key in this.allUsers) {
          if (this.allUsers[key].email == email) {
            delete this.allUsers[key];
          }
        }
        console.log(this.dataSource);
      }
    )
  }
}
