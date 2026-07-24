import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './component/task/task.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CreateTaskComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'harij';
}
