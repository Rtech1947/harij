import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  constructor(public taskService: TaskService,
  ) {
  }
  ngOnInit(){
    this.getAllTask();
  }

  getAllTask(){
    this.taskService.getAllTask();

  }

  updateTaskStatus(id:number, isCompleted:boolean){
    this.taskService.updateStatus(id, isCompleted);
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id);
  }
}