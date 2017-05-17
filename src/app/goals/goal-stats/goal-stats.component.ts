import { Component } from '@angular/core';
import { Goal } from '../../shared/interface/goal';
import { GoalStats } from '../../shared/interface/goal-stats';
import { GoalsService } from '../../shared/service/goals.service';

@Component({
	selector: 'app-goal-stats',
	templateUrl: './goal-stats.component.html',
	styleUrls: ['./goal-stats.component.scss']
})

export class GoalStatsComponent {

	public goalStats:GoalStats;

	constructor(private _goalsService:GoalsService){

	}

	ngOnInit(){
		this.goalStats = this._goalsService.getGoalStats();
	}

}
