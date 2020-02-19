import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    
        // path: 'home',
        // children: [
        //     {
        //         path: '',
        //         pathMatch: 'full',
        //         // canActivate: [AuthGuard],
        //         // data: { isLogged: true },
        //         component: HomepageComponent
        //     }
        // ]
        {
            path: 'home',
            component: HomepageComponent
        }
    
]

export const UserRoutingModule = RouterModule.forChild(routes);