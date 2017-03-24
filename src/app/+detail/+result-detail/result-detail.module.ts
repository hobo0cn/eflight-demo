import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './result-detail.routes';
import { ResultDetailComponent } from './result-detail.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ResultDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    ResultDetailComponent
  ]
})
export class ResultDetailModule {
  public static routes = routes;
}
