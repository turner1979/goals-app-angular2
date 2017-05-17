import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Goal } from '../interface/goal';

@Injectable()

export class GoalsService {

  private goals:Goal[] = [];

  private formState = {
    goalName: null,
    editMode: false,
    goalIndex: 0
  };

	getGoals(){
    this.goals = JSON.parse(localStorage.getItem("goals"));
		return this.goals;
	}

  addGoal(goal){
    this.goals.push(goal);
    this.saveGoals();
    this.formState.goalName = '';
  }

  editGoal(goalName, index){
    this.goals[index].name = this.formState.goalName;
    this.saveGoals();
    this.resetFormState();
  }

  saveGoals(){
    localStorage.setItem("goals", JSON.stringify(this.goals));
  }

  removeGoal(index){
    this.goals.splice(index, 1);
    this.saveGoals();
    this.resetFormState();
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

  getFormState(){
    return this.formState;
  }

  resetFormState(){
    this.formState.goalName = '';
    this.formState.editMode = false;
    this.formState.goalIndex = 0;
  }

  setEditMode(state){
    this.formState.editMode = state;
  }

  setGoalIndex(index){
    this.formState.goalIndex = index;
  }

  setGoalName(goalName){
    this.formState.goalName = goalName;
  }

}
