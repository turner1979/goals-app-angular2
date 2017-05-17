import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GoalsComponent } from './goals/goals.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'goals', component: GoalsComponent },
  { path: '**', component: HomeComponent }
];
