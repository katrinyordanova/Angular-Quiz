import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from '../auth.guard';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent
        // canActivate: [AuthGuard],
        // data: { isLogged: true },
    },
    {
        path: 'quiz',
        component: QuizComponent
    }
]

export const UserRoutingModule = RouterModule.forChild(routes);