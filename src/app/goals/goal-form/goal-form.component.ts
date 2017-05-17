import { Component } from '@angular/core';
import { Goal } from '../../shared/interface/goal';
import { GoalsService } from '../../shared/service/goals.service';

@Component({
	selector: 'app-goal-form',
	templateUrl: './goal-form.component.html',
	styleUrls: ['./goal-form.component.scss']
})

export class GoalFormComponent {

	public formState;

	constructor(private _goalsService:GoalsService){

	}

	ngOnInit(){
		this.formState = this._goalsService.getFormState();
	}

	onSubmit(){

		if(this.formState.editMode){
			this._goalsService.editGoal(this.formState.goalName, this.formState.goalIndex);
		}
		else{

			let goal:Goal = {
				name: this.formState.goalName,
				completed: false
			}

			this._goalsService.addGoal(goal);
		}
	}

}
