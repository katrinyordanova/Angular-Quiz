import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: GuestComponent
    }
]

export const GuestRoutingModule = RouterModule.forChild(routes);