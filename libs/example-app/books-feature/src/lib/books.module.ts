import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesModule } from '@ngrxdev/example-app/shared/ui';

import { BooksRoutingModule } from './books-routing.module';
import {
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
} from './components';
import {
  CollectionPageComponent,
  FindBookPageComponent,
  SelectedBookPageComponent,
  ViewBookPageComponent,
} from './containers';

import { MaterialModule } from './material.module';
import { ExampleAppSharedStateBooksModule } from '@ngrxdev/example-app/shared/state/books';

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
];

export const CONTAINERS = [
  FindBookPageComponent,
  ViewBookPageComponent,
  SelectedBookPageComponent,
  CollectionPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BooksRoutingModule,
    ExampleAppSharedStateBooksModule,
    PipesModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class BooksModule {}
