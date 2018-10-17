import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: [
    MATERIAL_MODULES,
  ],
  declarations: []
})
export class MaterialModule { }
