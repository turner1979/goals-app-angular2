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

	public goals:Goal[] = [];
	public goalStats;
	public formState;

	constructor(private _goalsService:GoalsService){

	}

	ngOnInit(){
		this.goals = this._goalsService.getGoals();
		this.goalStats = this._goalsService.getGoalStats();
		this.formState = this._goalsService.getFormState();
	}

	editGoal(index){
		this._goalsService.setEditMode(true);
		this._goalsService.setGoalIndex(index);
		this._goalsService.setGoalName(this.goals[index].name);
	}

	removeGoal(index){
		this._goalsService.removeGoal(index);
	}

}
