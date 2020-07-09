import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommasPipe } from './pipes/add-commas.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AddCommasPipe,
    EllipsisPipe
  ],
  exports: [
    AddCommasPipe,
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleAppSharedUiModule {}
