import { createAction, props } from "@ngrx/store";
import { Task } from './task.model';

//Create action takes in action type and action payload
export const addTask = createAction('[Task] Add Task', props<{ task: Task}>());
export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
