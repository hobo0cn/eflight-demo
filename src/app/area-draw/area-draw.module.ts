import { NgModule } from '@angular/core';
import { AreaDrawComponent } from './area-draw.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { RouterModule } from '@angular/router';

// import { routes } from './area-draw.routes';

@NgModule({
  declarations: [AreaDrawComponent],
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forChild(routes)
  ],
  exports: [AreaDrawComponent],
  providers: []
})
export class AreaDrawModule{
    // public static routes = routes;
}
