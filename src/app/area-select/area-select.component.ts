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
  styleUrls: [ './area-select.component.css' ],
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
    this.location = location;
  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
    // let map = L.map("mapid", {
    //     zoomControl: false,
    //     center: L.latLng(39.58, 116.38),
    //     zoom: 4,
    //     layers: [this.mapService.baseMaps.AeroMap]
    // });
    //
    // L.control.zoom({ position: "bottomright" }).addTo(map);
    // L.control.layers(this.mapService.baseMaps).addTo(map);
    // L.control.scale().addTo(map);
    // this.mapService.map = map;
    
    // this.geocoder.getCurrentLocation()
    //     .subscribe(
    //         location => map.panTo([location.latitude, location.longitude]),
    //         err => console.error(err)
    //     );
    // this.toolbarComponent.Initialize();
  }

  selectArea(): void{
    // TODO 跳转到任务类型选择
    this._router.navigate(['/service-select']);
  }

}
