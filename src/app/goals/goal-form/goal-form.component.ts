import { Component } from '@angular/core';
import { Goal } from '../../shared/interface/goal';
import { GoalsService } from '../../shared/service/goals.service';

@Component({
	selector: 'app-goal-form',
	templateUrl: './goal-form.component.html',
	styleUrls: ['./goal-form.component.scss']
})

export class GoalFormComponent {

	public goalName:string = 'New Goal';

	constructor(private _goalsService:GoalsService){

	}

	addGoal(){

		let goal:Goal = {
			name: this.goalName,
			completed: false
		}

		this._goalsService.addGoal(goal);

	}

}
