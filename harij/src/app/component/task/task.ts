import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { task } from '../../model/taskModel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  taskList:task[] = [];
  constructor(private taskService: TaskService,
  ) {
    
  }
  ngOnInit(){
    this.getAllTask();
  }

  getAllTask(){
    this.taskService.getAllTask().subscribe((data:any)=>{
      this.taskList = data;
    });
  }

  updateTaskStatus(id:number, isCompleted:boolean){
    this.taskService.updateStatus(id, isCompleted).subscribe((data)=>{
      this.getAllTask();
    });
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe((data)=>{
      this.getAllTask();
    });
  }
}