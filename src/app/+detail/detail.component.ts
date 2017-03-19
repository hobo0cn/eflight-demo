import 'rxjs/add/operator/switchMap';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Location }    from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../task';
import {TaskService} from '../task.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1>任务详情</h1>
    <div *ngIf="task">

      <p>{{task.id}}</p>
      <span>
        <a [routerLink]=" ['./result-detail'] ">
          服务结果
        </a>
      </span>
    </div>

  `,
})
export class DetailComponent implements OnInit {
  public task: Task;
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService,
    private location: Location,
    private route: ActivatedRoute

  ) {
    this.location = location;
  }
  public ngOnInit() {
    console.log('hello `Detail` component');
    // console.log(this.route.params['id']);
    this.taskService.getTask(this.route.params._value['id'])
      .then(task => {
        this.task = task;
        console.log(this.task);
      });

    // this.route.params
    //   .switchMap((params: Params) => this.taskService.getTask(+params['id']))
    //   .subscribe(task => this.task = task);
  }

}
