import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './user.effects';

@NgModule({
  imports: [EffectsModule.forFeature([UserEffects])],
})
export class UserModule {}
