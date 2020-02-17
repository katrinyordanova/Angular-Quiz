import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent }
]

export const AuthenticationRoutingModule = RouterModule.forChild(routes);