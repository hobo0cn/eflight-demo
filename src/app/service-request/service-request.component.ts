import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Location }    from '@angular/common';
import {
  Router,
  Params
 } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TaskStatusEnum } from '../task';
import { AreaDrawComponent } from '../area-draw';
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
  public crop: string;
  public publishTime: Date;
  public finishTime: Date;
  public   isUrgent: Boolean; // 是否加急
  public   is3DModel: Boolean; // 是否3D建模
  public   isReport: Boolean; // 是否需要报告
  @ViewChild(AreaDrawComponent)  areaDrawComponent: AreaDrawComponent;
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

    this.new_task.name = "无人机验标";
    this.new_task.status = TaskStatusEnum.created;
    this.new_task.crop = this.crop;
    this.taskService.create(this.new_task);
    this._router.navigate(['/dashboard']);
  }

}
