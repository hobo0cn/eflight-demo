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
import { AreaDrawComponent } from '../area-draw/area-draw.component';
import { MapService} from '../map.service';

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
  public  projectDesc: string; //备注
  public datePickerConfig = {};
  // TypeScript public modifiers
  constructor(
    private location: Location,
    public _router: Router,
    public taskService: TaskService,
    private mapService: MapService
  ) {
    this.location = location;
    this.new_task = new Task();
    // [config]="datePickerConfig"
    this.datePickerConfig = {
      format: "YYYY-MM-DD",
      weekdayNames: {su: '日',mo: '一',tu: '二',we: '三',th: '四',fr: '五',sa: '六'}
    }
  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
  areaDraw(): void {
      // TODO 调转到area-draw
      this._router.navigate(['/service-request-draw']);
  }

  newTask(): void {
    console.log('new task');
    // 插入新的task节点
    // console.log(this.taskService.drawGeojson);

    this.new_task.name = "无人机验标";
    this.new_task.status = TaskStatusEnum.created;
    this.new_task.crop = this.crop;
    this.new_task.notes = this.projectDesc;
    this.new_task.areaGeojson = this.mapService.drawGeojson;
    this.new_task.acreage = 60.3;
    this.new_task.cost = this.new_task.acreage*3000;
    this.taskService.create(this.new_task);

    this._router.navigate(['/dashboard']);
  }

  back(): void {
      this._router.navigate(['/service-select']);
  }

}
