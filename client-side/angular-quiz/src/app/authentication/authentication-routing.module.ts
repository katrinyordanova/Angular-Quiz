import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    { 
        path: 'register', 
        component: RegisterComponent, 
        // canActivate:[ AuthGuard ], 
        // data: { isLogged: false } 
      },
      { 
        path: 'login', 
        component: LoginComponent, 
        // canActivate: [ AuthGuard ], 
        // data: { isLogged: false } 
      },
]

export const AuthenticationRoutingModule = RouterModule.forChild(routes);