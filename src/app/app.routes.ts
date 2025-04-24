import { Routes } from '@angular/router';
import TodoListComponent from './todo/todo-list.component';
import TodoFormComponent from './todo/todo-form/todo-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  {
    path: 'todos',
    loadComponent: () => TodoListComponent
  },
  {
    path:'todo-new',
    loadComponent: () => TodoFormComponent
  }
];
