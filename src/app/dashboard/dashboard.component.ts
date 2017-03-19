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

    }
    return '未知';

  }

  open(id: number): void {
    // 打开任务详情
    this._router.navigate(['/detail/' + id]);
  }

  newServiceRequest(): void {
    //新的需求，跳转到区域选择
    this._router.navigate(['/area-select']);
  }


}
