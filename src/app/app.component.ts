import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task.model';
import { Store } from '@ngrx/store';
import { AppState } from './task.reducer';
import { addTask, deleteTask, updateTask } from './task.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  tasks: Task[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('tasks').subscribe(tasks => this.tasks = tasks);
  }

  addNewTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: 'New Task',
      description: 'This is a new task.'
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = {...task, title: 'Updated Task', description: 'This task has been updated.'};
    this.store.dispatch(updateTask({task: updatedTask}));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({id}));
  }
}
