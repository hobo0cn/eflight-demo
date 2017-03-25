import 'rxjs/add/operator/switchMap';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Location }    from '@angular/common';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Task, TaskStatusEnum } from '../task';

import { TaskService } from '../task.service';
import { MapService} from '../map.service';
// import { AreaDrawComponent } from '../area-draw';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  styleUrls: [ './detail.component.css' ],
  templateUrl:'./detail.component.html'
})
export class DetailComponent implements OnInit {
  public task: Task;
  public title: string;
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService,
    private location: Location,
    private route: ActivatedRoute,
    public _router: Router,
    private mapService: MapService

  ) {
    this.location = location;

  }
  public ngOnInit() {
    console.log('hello `Detail` component');
    // console.log(this.route.params['id']);
    this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.taskService.getTask(id)
         .then(task => {
           this.task = task;
           console.log(this.task);
           if(this.task.status===TaskStatusEnum.rejected)
            this.title = "驳回原因";
           else
            this.title = "无人机验标";

         });
       // In a real app: dispatch action to load the details here.
    });



    // this.route.params
    //   .switchMap((params: Params) => this.taskService.getTask(+params['id']))
    //   .subscribe(task => this.task = task);
  }

  back(): void {
    // 打开任务详情
    this._router.navigate(['/']);
  }

  reloadMap(): void{
    this.mapService.map.invalidateSize();
  }


}
