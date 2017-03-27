import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { AreaDrawComponent } from '../../area-draw/area-draw.component'
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ResultDetail` component loaded asynchronously');

@Component({
  selector: 'result-detail',
  template: `

    <iframe
    src="https://www.altizure.com/project/58d39584f387231e6c93a095/model/embed#autoplay=true"
    style="position:absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; width: 100%; height: 100%; border: none; margin: 0; padding: 0; overflow: hidden;"
    >
   </iframe>
  `,
})
export class ResultDetailComponent implements OnInit {

  @ViewChild(AreaDrawComponent) areaComponent: AreaDrawComponent;

  public ngOnInit() {
    console.log('hello `ResultDetail` component');
  }

}
