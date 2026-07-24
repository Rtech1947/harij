import { Component, computed, OnChanges, signal, SimpleChanges } from '@angular/core';
import { task } from '../../model/taskModel';
import { TaskService } from '../../services/task.service';
import { single } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private taskService:  TaskService){

  }

 total = computed(() =>
    this.taskService.taskList().length
  );

completed = computed(() =>
    this.taskService.taskList().filter(task => task.completed).length
  );

 pending = computed(() =>
    this.total() - this.completed()
  );

}