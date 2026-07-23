import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.scss',
})
export class CreateTask {
  taskForm : FormGroup;
  constructor(private fb: FormBuilder,
    private taskService: TaskService
  ){
    this.taskForm = this.fb.group({
      title: [''],
      description: ['']
    })
  }

  onSubmit(){
    this.taskService.createTask(this.taskForm.value).subscribe((data)=>{
      console.log(data);
    });
    this.taskService.getAllTask().subscribe((data)=>{
      console.log(data);
    })
  }
}