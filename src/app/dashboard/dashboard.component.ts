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
import {TaskService} from '../task.service';
import {TaskStatusEnum} from '../task';

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
  public tasks: Task[] = [];
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService,
    private location: Location,
    public _router: Router
  ) {
    this.location = location;
  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
    // 通过TaskService获取任务列表数据
    this.taskService.getTasks()
      .then(tasks => {
        this.tasks = tasks;
        console.log(this.tasks);
      });
  }

  getStatusString(status: TaskStatusEnum): string {

    switch (status) {
        case TaskStatusEnum.created:
          return '等待接单';
        case TaskStatusEnum.accepted:
            return '已接单';
        case TaskStatusEnum.canceled:
                return '已取消';
        case TaskStatusEnum.processing:
            return '飞手正在服务';
        case TaskStatusEnum.finished:
            return '订单已完成';
        case TaskStatusEnum.rejected:
               return '驳回';

    }
    return '未知';

  }

  isShowCancel(status: TaskStatusEnum): Boolean {
    switch (status) {
        case TaskStatusEnum.created:
          return true;
        case TaskStatusEnum.accepted:
            return false;
        case TaskStatusEnum.canceled:
                return false;
        case TaskStatusEnum.processing:
            return false;
        case TaskStatusEnum.finished:
            return false;
        case TaskStatusEnum.rejected:
           return false;

    }
    return true;

  }


  getTaskProcessRate(status: TaskStatusEnum): number {
    switch (status) {
        case TaskStatusEnum.created:
        case TaskStatusEnum.rejected:
          return 0;
        case TaskStatusEnum.accepted:
            return 10;
        case TaskStatusEnum.canceled:
                return 0;
        case TaskStatusEnum.processing:
            return 30;
        case TaskStatusEnum.finished:
            return 100;
    }
    return 0;
  }

  open(id: number): void {
    // 打开任务详情
    console.log(id);
    this._router.navigate(['/detail/' , id]);
  }

  cancel(task: Task): void {
    task.status = TaskStatusEnum.canceled;
    this.taskService.update(task);
  }

  newServiceRequest(): void {
    //新的需求，跳转到区域选择
    this._router.navigate(['/area-select']);
  }


}
