import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CarServicesComponent } from './car-services/car-services.component';
import { CarsComponent } from './cars/cars.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'services', component: CarServicesComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'profile', component: EditProfileComponent},
  {path: 'profile/:email', component: EditProfileComponent},
  {path: 'allUsers', component: ListAllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
