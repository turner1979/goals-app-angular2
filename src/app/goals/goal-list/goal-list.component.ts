import { Component } from '@angular/core';
import { Goal } from '../../shared/interface/goal';
import { GoalsService } from '../../shared/service/goals.service';
//import { config } from '../config';

@Component({
	selector: 'app-goal-list',
	templateUrl: './goal-list.component.html',
	styleUrls: ['./goal-list.component.scss']
})

export class GoalListComponent {

	constructor(private _goalsService:GoalsService){

	}

	public goals = this._goalsService.getGoals();
	public goalStats = this._goalsService.getGoalStats();

	removeGoal(index){
		this._goalsService.removeGoal(index);
	}

}
