import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

class UserAuth {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public userType?: number
    ) { }
}


@Injectable({ providedIn: 'root' })

export class UserService {

    user = new BehaviorSubject<UserAuth>(null);;

    constructor(private router: Router, private http: HttpClient) { this.autoLogin(); }

    register(name: string, email: string, password: string, userType: number) {
        const newUser = new UserAuth(email, password, name, userType);
        return this.http.post('http://localhost:3000/api/register', newUser);
    }

    autoLogin() {
        const userData: {
            email: string;
            password: string;
            name: string;
            userType: number
        } | undefined = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }

        const loadedUser = new UserAuth(
            userData.email,
            userData.password,
            userData.name,
            userData.userType
        );

        this.user.next(loadedUser);
    }

    login(email: string, password: string) {
        const data = { email, password };

        return this.http.post<string>('http://localhost:3000/api/login', data).pipe((tap(
            resData => {
                const user = new UserAuth(email, password, resData['name'], resData['userType']);
                this.user.next(user);
                localStorage.setItem('userData', JSON.stringify(user));
            })
        ))
    }

    async logout() {
        this.user.next(null);
        localStorage.removeItem('userData');

        await this.router.navigateByUrl('/');
    }

    updateUser(name: string, email: string, password: string, oldEmail: string) {
        const data = {user: {name, email, password}, oldEmail};
      return this.http.put<UserAuth>(`http://localhost:3000/api/user`, data).pipe((tap(
        resData => {
            this.user.next(resData);
            console.log(this.user);
            localStorage.setItem('userData', JSON.stringify(resData));
        })
    ))
    }

    updateUserByAdmin(name: string, email: string, password: string, oldEmail: string) {
        const data = {user: {name, email, password}, oldEmail};
      return this.http.put<UserAuth>(`http://localhost:3000/api/user`, data);
    }

    getAllUsers() {
        return this.http.get(`http://localhost:3000/api/allUsers`);
    }

    getUser(email: string) {
        return this.http.get(`http://localhost:3000/api/user/${email}`);
    }

    deleteUser(email: string) {
        return this.http.delete(`http://localhost:3000/api/user/${email}`);
    }
}