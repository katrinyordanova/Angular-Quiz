import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from '../auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'home/quiz',
        component: QuizComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home/result',
        component: ResultComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home/profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home/leaderboard',
        component: LeaderboardComponent,
        canActivate: [AuthGuard]
    }
]

export const UserRoutingModule = RouterModule.forChild(routes);