import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL = 'https://springboot-demo-production-fac4.up.railway.app/tasks';
  constructor(private http: HttpClient){
  }
  getAllTask(){
    return this.http.get(this.URL);
  }

  createTask(data:any){
   return this.http.post(this.URL, data);
  }

  updateStatus(id:number, completed:boolean){
    const url = `${this.URL}/${id}?completed=${completed}`;
    return this.http.put(url, {});
  }

  deleteTask(id:number){
    const url = `${this.URL}/${id}`;
    return this.http.delete(url)
  }
}