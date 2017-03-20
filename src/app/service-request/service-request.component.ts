import {
  Component,
  OnInit
} from '@angular/core';
import { Location }    from '@angular/common';
import {
  Router,
  Params
 } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'service-request',  // <service-request></service-request>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './service-request.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './service-request.component.html'
})
export class ServiceRequestComponent implements OnInit {
  // Set our default values
  // public TaskList = { username: '' };
  public new_task: Task;
  // TypeScript public modifiers
  constructor(
    private location: Location,
    public _router: Router,
    public taskService: TaskService
  ) {
    this.location = location;
    this.new_task = new Task();
  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  newTask(): void {
    console.log('new task');
    // TODO 插入新的task节点
    
    this.new_task.name = "test";
    this.taskService.create(this.new_task);
    this._router.navigate(['/dashboard']);
  }

}
