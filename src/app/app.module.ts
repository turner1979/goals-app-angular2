import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalFormComponent } from './goals/goal-form/goal-form.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { GoalStatsComponent } from './goals/goal-stats/goal-stats.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { GoalsService } from './shared/service/goals.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GoalsComponent,
    GoalFormComponent,
    GoalListComponent,
    GoalStatsComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GoalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
