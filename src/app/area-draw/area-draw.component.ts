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
import 'leaflet-draw';



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
  public polygon: L.Draw.Polygon;
  // TypeScript public modifiers
  constructor(
    public taskService: TaskService,
    private location: Location,
    public _router: Router,
    private mapService: MapService,

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

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    let drawControl = new L.Control.Draw({
              draw: {
                polyline: true,
                marker: true,
                rectangle: true,
                circle: true,
                polygon: true
              },
              edit: {
                  featureGroup: drawnItems,
                  remove: true
              }
          });
      map.addControl(drawControl);

      map.on('draw:created', function (e) {
               let type = e.layerType,
                   layer = e.layer;
               let anno_cat = "";
               let anno_geojson = "";

               if (type === 'polygon') {
                  this.polygon.disable();
                  anno_cat = "Polygon";
               };
  });

  }

  public getDrawGeojson(): string {
     let geojsonStr: string = ""
     return geojsonStr;
  }
  
  selectArea(): void{
    // TODO 跳转到任务类型选择
    this._router.navigate(['/service-select']);
  }

}
