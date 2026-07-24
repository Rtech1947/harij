import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  taskForm : FormGroup;
  constructor(private fb: FormBuilder,
    private taskService: TaskService
  ){
    this.taskForm = this.fb.group({
      title: [''],
      description: ['']
    })
  }

  onSubmit() {
    this.taskService.createTask(this.taskForm.value).subscribe({
      next: (data) => {
        console.log('Task Created', data);

        this.taskForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
