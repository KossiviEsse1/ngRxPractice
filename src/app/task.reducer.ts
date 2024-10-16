import { Task } from './task.model';
import { addTask, updateTask, deleteTask } from './task.actions';

//Reducers handle actions
export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: []
}

export function taskReducer(state = initialState, action: any): AppState {
  switch (action.type) {
    case addTask.type:
      return {...state, tasks : [...state.tasks, action.task]};
    case updateTask.type:
      return {
        ...state,
        tasks: state.tasks.map((task => (task.id === action.task.id ? action.task : task)))};
    case deleteTask.type:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id)};
    default:
      return state;
  }
}
