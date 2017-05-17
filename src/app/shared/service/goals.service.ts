import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Goal } from '../interface/goal';
import { GoalStats } from '../interface/goal-stats';

@Injectable()

export class GoalsService {

  private goals:Goal[] = [];

  private formState = {
    goalName: null,
    editMode: false,
    goalIndex: 0
  };

  private goalStats:GoalStats = {
    completed: 0,
    remaining: 0,
    total: 0
  };

	getGoals(){
    this.goals = JSON.parse(localStorage.getItem("goals"));
		return this.goals;
	}

  addGoal(goal){

    if(this.formState.goalName){
      this.goals.push(goal);
      this.saveGoals();
      this.formState.goalName = '';
      this.getGoalStats();
    }

  }

  toggleComplete(index){
    this.goals[index].completed = !this.goals[index].completed;
    this.saveGoals();
    this.getGoalStats();
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
    this.getGoalStats();
  }

  getGoalStats(){

    this.goalStats.completed = 0;
    this.goalStats.remaining = 0;
    this.goalStats.total = 0;

    this.goals.map((goal) => {
      if(goal.completed === true){
        this.goalStats.completed++;
      }
      else{
        this.goalStats.remaining++;
      }
    });

    this.goalStats.total = this.goals.length;

    return this.goalStats;

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
