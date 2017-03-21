import { NgModule } from '@angular/core';
import { AreaDrawComponent } from './area-draw.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AreaDrawComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AreaDrawComponent],
  providers: []
})
export class AreaDrawModule{}
