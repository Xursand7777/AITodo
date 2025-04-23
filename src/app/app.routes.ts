import { Routes } from '@angular/router';
import TodoComponent from './todo/todo.component';
import TodoFormComponent from './todo/todo-form/todo-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  {
    path: 'todos',
    loadComponent: () => TodoComponent
  },
  {
    path:'todo-new',
    loadComponent: () => TodoFormComponent
  }
];
