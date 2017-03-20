import {
  Component,
  OnInit
} from '@angular/core';
import { Location }    from '@angular/common';
import {
  Router,
  Params
 } from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'service-select',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './service-select.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './service-select.component.html'
})
export class ServiceSelectComponent implements OnInit {
  // Set our default values
  // public TaskList = { username: '' };

  // TypeScript public modifiers
  constructor(
    private location: Location,
    public _router: Router
  ) {
    this.location = location;
  }

  public ngOnInit() {
    console.log('hello `dashboard` component');
    // this.title.getData().subscribe(data => this.data = data);


  }

  newServiceRequest(serviceType: number): void {
    // TODO 选择服务需求类型
    this._router.navigate(['/service-request']);
  }


}
