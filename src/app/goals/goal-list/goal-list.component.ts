import { Component } from '@angular/core';
import { Goal } from '../../shared/interface/goal';
//import { config } from '../config';

@Component({
	selector: 'app-goal-list',
	templateUrl: './goal-list.component.html',
	styleUrls: ['./goal-list.component.scss']
})

export class GoalListComponent {

	public goals:Goal[] = [
		{ name : 'Goal 1', completed: true },
		{ name : 'Goal 2', completed: false },
		{ name : 'Goal 3', completed: true }
	];

}
