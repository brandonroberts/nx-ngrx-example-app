import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@example-app/material';
import { ExampleAppSharedStateAuthModule } from '@ngrxdev/example-app/shared/state/auth';

import { LoginPageComponent } from './containers';
import { LoginFormComponent } from './components';

import { AuthRoutingModule } from './auth-routing.module';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    ExampleAppSharedStateAuthModule
  ],
  declarations: COMPONENTS,
})
export class AuthModule {}
