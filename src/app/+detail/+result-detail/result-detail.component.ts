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
    <h1>服务结果</h1>
    
  `,
})
export class ResultDetailComponent implements OnInit {

  @ViewChild(AreaDrawComponent) areaComponent: AreaDrawComponent;

  public ngOnInit() {
    console.log('hello `ResultDetail` component');
  }

}
