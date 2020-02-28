import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from '../auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'quiz',
        component: QuizComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'result',
        component: ResultComponent,
        canActivate: [AuthGuard]
    }
]

export const UserRoutingModule = RouterModule.forChild(routes);