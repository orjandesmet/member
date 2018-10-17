import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule
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
