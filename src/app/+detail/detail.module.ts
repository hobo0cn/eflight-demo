import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';
import {TaskService} from '../task.service';
import { AreaDrawModule } from '../area-draw';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AreaDrawModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    TaskService,

  ]
})
export class DetailModule {
  public static routes = routes;
}
