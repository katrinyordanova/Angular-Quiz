import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuestComponent } from './guest/guest/guest.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { GuestRoutingModule } from './guest/guest-routing.module';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';


const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    // data: { isLogged: false },
    // canActivate: [ AuthGuard ],
    component: GuestComponent 
  },
  // { 
  //   path: 'register', 
  //   component: RegisterComponent, 
  //   canActivate:[ AuthGuard ], 
  //   data: { isLogged: false } 
  // },
  // { 
  //   path: 'login', 
  //   component: LoginComponent, 
  //   canActivate: [ AuthGuard ], 
  //   data: { isLogged: false } 
  // },
  // {
  //   path: 'home',
  //   canActivate: [ AuthGuard ],
  //   data: { isLogged: true },
  //   component: HomepageComponent
  // },
  { 
    path: '**', 
    component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
