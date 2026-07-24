import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../model/taskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL = 'https://springboot-demo-production-fac4.up.railway.app/tasks';

  constructor(private http: HttpClient) {}

  getAllTask(): Observable<task[]> {
    return this.http.get<task[]>(this.URL);
  }

  createTask(data: any): Observable<task> {
    return this.http.post<task>(this.URL, data);
  }

  updateStatus(id: number, completed: boolean): Observable<task> {
    return this.http.put<task>(
      `${this.URL}/${id}?completed=${completed}`,
      {}
    );
  }

  deleteTask(id: number): Observable<string> {
    return this.http.delete(`${this.URL}/${id}`, {
      responseType: 'text'
    });
  }
}