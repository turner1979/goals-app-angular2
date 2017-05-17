import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Goal } from '../interface/goal';

@Injectable()

export class GoalsService {

  private goals:Goal[] = [];

	getGoals(){
    this.goals = JSON.parse(localStorage.getItem("goals"));
		return this.goals;
	}

  addGoal(goal){
    this.goals.push(goal);
    this.saveGoals();
  }

  saveGoals(){
    localStorage.setItem("goals", JSON.stringify(this.goals));
  }

  removeGoal(index){
    this.goals.splice(index, 1);
    this.saveGoals();
  }

  getGoalStats(){

    let goalStats = {
      completed: 0,
      remaining: 0,
      total: this.goals.length
    }

    this.goals.map((goal) => {
      if(goal.completed === true){
        goalStats.completed++;
      }
      else{
        goalStats.remaining++;
      }
    });

    return goalStats;

  }

}
