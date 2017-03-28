import {
  Component,
  OnInit
} from '@angular/core';
import { Location }    from '@angular/common';
import {Router} from '@angular/router';
import { Task } from '../task';
import {TaskService} from '../task.service';
import { MapService} from '../map.service';
import {TaskStatusEnum} from '../task';
import * as _ from 'lodash';
import 'leaflet/dist/leaflet.css';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'area-select',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./area-select.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './area-select.component.html'
})
export class AreaSelectComponent implements OnInit {
  // Set our default values
  // public TaskList = { username: '' };
  public tasks: Task[] = [];
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService,
    private location: Location,
    public _router: Router,
    private mapService: MapService,

  ) {
    // this.mapService.featureClickFunction = this.selectArea.bind(this);
    this.location = location;
  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
    let map = L.map("mapid", {
        zoomControl: false,
        center: L.latLng(23.4394111680718, 107.551593359032),
        zoom: 5,
        layers: [this.mapService.createBaselayer()]
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);
    // L.control.layers(this.mapService.baseMaps).addTo(map);
    L.control.scale().addTo(map);
    this.mapService.map = map;

    // this.mapService.loadResultLayer();
    this.mapService.showSelectLayer(this.selectArea.bind(this));


    // this.geocoder.getCurrentLocation()
    //     .subscribe(
    //         location => map.panTo([location.latitude, location.longitude]),
    //         err => console.error(err)
    //     );
    // this.toolbarComponent.Initialize();
  }

  public ngAfterContentInit() {
    // Component content has been initialized
    console.log('ngAfterContentInit');
    this.mapService.map.invalidateSize();
    // setTimeout(_.bind(function() {
    //   this.mapService.map.invalidateSize();
    // },this), 100);
  }

  public selectArea(): void{
    // TODO 跳转到任务类型选择
    this._router.navigate(['/service-select']);
  }

  back(): void {
    // 打开任务详情
    this._router.navigate(['/']);
  }
}
