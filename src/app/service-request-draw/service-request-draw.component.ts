import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
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

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'service-request-draw',  // <service-request></service-request>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './service-request-draw.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './service-request-draw.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ServiceRequestDrawComponent implements OnInit {
  // Set our default values



  // TypeScript public modifiers
  constructor(
    private location: Location,
    public _router: Router,
    public taskService: TaskService

  ) {
    this.location = location;

  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);
  }


  back(): void {
      this._router.navigate(['/service-request']);
  }


}
