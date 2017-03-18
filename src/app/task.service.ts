import { Injectable }    from '@angular/core';
import { Task } from './task';
import {TASKS} from 'mock-tasks'

@Injectable()
export class TaskService {

  // private headers = new Headers({'Content-Type': 'application/json'});
  // private heroesUrl = 'api/heroes';  // URL to web api
  //
  // constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    // return this.http.get(this.heroesUrl)
    //            .toPromise()
    //            .then(response => response.json().data as Hero[])
    //            .catch(this.handleError);
    return Promise.resolve(TASKS);
  }

  getTask(id: number): Promise<Task> {
    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as Hero)
    //   .catch(this.handleError);
    for (var i = 0; i < TASKS.length; i++) {
      if (TASKS[i].id===id){
        return Promise.resolve(TASKS[i]);
      }
    }
  }

  // delete(id: number): Promise<void> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  create(task: Task): Promise<Task> {
    // return this.http
    //   .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //   .toPromise()
    //   .then(res => res.json().data)
    //   .catch(this.handleError);
    TASKS.push(task);
    return Promise.resolve(task);
  }

  update(task: Task): Promise<Task> {
    // const url = `${this.heroesUrl}/${hero.id}`;
    // return this.http
    //   .put(url, JSON.stringify(hero), {headers: this.headers})
    //   .toPromise()
    //   .then(() => hero)
    //   .catch(this.handleError);
    for (var i = 0; i < TASKS.length; i++) {
      if (TASKS[i].id===task.id){
        TASKS[i] = task;
        return Promise.resolve(TASKS[i]);
      }
    }
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}
