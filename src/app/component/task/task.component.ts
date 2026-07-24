import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { task } from '../../model/taskModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  taskList: task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getAllTask();
  }

  getAllTask() {
    this.taskService.getAllTask().subscribe({
      next: (data) => {
        this.taskList = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateTaskStatus(id: number, completed: boolean) {
    this.taskService.updateStatus(id, completed).subscribe({
      next: () => {
        this.getAllTask();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.getAllTask();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
