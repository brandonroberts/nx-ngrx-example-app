import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { RouterEffects } from './router.effects';
import { StoreModule } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('router', fromRouter.routerReducer),
    EffectsModule.forFeature([RouterEffects])
  ],
})
export class RouterStateModule {}
