import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTask } from './component/create-task/create-task';
import { Task } from './component/task/task';

@Component({
  selector: 'app-root',
  imports: [ CreateTask, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  task : [] =[];

  constructor(){

  }
  ngOnInit(){
  }
}