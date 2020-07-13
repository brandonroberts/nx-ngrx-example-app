import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


import {
  AppComponent,
  NotFoundPageComponent,
} from '@example-app/core/containers';

import { LayoutFeatureModule } from '@ngrxdev/example-app/layout-feature';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, LayoutFeatureModule, MatCardModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
