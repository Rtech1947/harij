import { Component } from '@angular/core';
import { TaskComponent } from './component/task/task.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CreateTaskComponent, TaskComponent, DashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'harij';
  option = 1;
  updateView(num:number){
    this.option = num;
  }
}
