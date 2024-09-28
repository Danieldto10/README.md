import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksUrl = 'api/tasks';  // URL da API (mockada pelo InMemoryDb)

  constructor(private http: HttpClient) {}

  // Método para buscar todas as tarefas
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.tasksUrl);
  }

  // Método para adicionar uma nova tarefa
  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.tasksUrl, task);
  }

  // Método para atualizar uma tarefa existente
  updateTask(task: any): Observable<any> {
    return this.http.put(this.tasksUrl, task);
  }

  // Método para deletar uma tarefa
  deleteTask(id: number): Observable<any> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url);
  }
}
