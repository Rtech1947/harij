import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from '../model/taskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
   URL = 'https://springboot-demo-production-fac4.up.railway.app/tasks';
  taskList : task[] = []
  constructor(private http: HttpClient){
  }
  getAllTask(){
    this.http.get<task[]>(this.URL).subscribe(data => {
      this.taskList = data;
    });
  }

  createTask(data:any){
   return this.http.post<task[]>(this.URL, data).subscribe((data)=>{
    this.taskList = data;
   });
  }

  updateStatus(id:number, completed:boolean){
    const url = `${this.URL}/${id}?completed=${completed}`;
    return this.http.put<task[]>(url, {}).subscribe((data)=>{
      this.taskList = data;
    });
  }

  deleteTask(id:number){
    const url = `${this.URL}/${id}`;
    return this.http.delete<task[]>(url).subscribe((data)=>{
      this.taskList = data;
    })
  }
}