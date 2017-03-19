import {
  Component,
  OnInit
} from '@angular/core';

import { Task } from '../task';
import {TaskService} from '../task.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'dashboard',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './dashboard.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // Set our default values
  // public TaskList = { username: '' };
  tasks: Task[] = [];
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService
  ) {}

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
    //通过TaskService获取任务列表数据
    this.taskService.getTasks()
      .then(tasks => this.tasks = tasks);
  }

}
