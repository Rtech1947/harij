import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { task } from '../model/taskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL = 'https://springboot-demo-production-fac4.up.railway.app/tasks';
  taskList = signal<task[]>([]);
  constructor(private http: HttpClient) {}

  getAllTask(){
    this.http.get<task[]>(this.URL).subscribe((data)=>{
      this.taskList.set(data);
    });
  }

  createTask(data: any) {
    this.http.post<task[]>(this.URL, data).subscribe((data)=>{
      this.taskList.set(data);
    });
  }

  updateStatus(id: number, completed: boolean) {
    this.http.put<task[]>(`${this.URL}/${id}?completed=${completed}`,
      {}
    ).subscribe((data)=>{
      this.taskList.set(data);
    })
  }

  deleteTask(id: number){
     this.http.delete<task[]>(`${this.URL}/${id}`).subscribe((data)=>{
      this.taskList.set(data);
     });
  }
}