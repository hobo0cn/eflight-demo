import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Location }    from '@angular/common';
import {Router} from '@angular/router';
import { Task } from '../task';
import {TaskService} from '../task.service';
import { MapService} from '../map.service';
import {TaskStatusEnum} from '../task';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css'


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'area-draw',  // <area-draw></area-draw>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './area-draw.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './area-draw.component.html'
})

export class AreaDrawComponent implements OnInit {
  // Set our default values
  // public TaskList = { username: '' };
  public tasks: Task[] = [];
  // public polygon: L.Draw.Polygon;

  @Input('init')
  controlType: number = 0;// 0-申请服务画区域  1-服务后看之前画的预定区域 2-服务后画区域
  @Input('task')
  task: Task;
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService,
    private location: Location,
    public _router: Router,
    private mapService: MapService
  ) {
    this.location = location;
  }

  public ngOnInit() {
    console.log('hello `area-draw` component');
    // this.title.getData().subscribe(data => this.data = data);
    let map = L.map("mapid", {
        zoomControl: false,
        center: L.latLng(23.4394111680718, 107.551593359032),
        zoom: 14,
        layers: [this.mapService.baseMaps.AeroMap]
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control.layers(this.mapService.baseMaps).addTo(map);
    L.control.scale().addTo(map);
    this.mapService.map = map;

    //添加地图绘图控件
    this.mapService.loadDrawCtrl();
    //如果任务初始化，则加载结果图层
    if(this.task){
      this.mapService.loadResultLayer(this.task.wmsURL);
      // TODO 加载标绘的范围geojson layer
      if(this.controlType === 1) // 1-服务后看之前画的预定区域
        this.mapService.loadGeoJsonLayer(this.task.areaGeojson, this.selectArea.bind(this));
      if(this.controlType === 2) // 2-服务后画出的区域
        this.mapService.loadGeoJsonLayer(this.task.drawGeojson, this.selectArea.bind(this));
    }
    // //test
    // this.mapService.drawGeojson = 'test add by area-draw-component';
  }

  public saveDrawGeojson(geojsonStr: string): void {
     //TODO 将绘制的geojson存储在task中,本函数作为 MapService的回调函数，在标绘后调用。

  }

  selectArea(): void{
    // TODO 设置task中区域的面积
    this.task.acreage = 60.3;
  }

}
