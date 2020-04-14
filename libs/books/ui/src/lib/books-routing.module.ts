import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CollectionPageComponent,
  FindBookPageComponent,
  ViewBookPageComponent,
} from './containers';
import { BookExistsGuard } from './guards';

export const routes: Routes = [
  {
    path: 'find',
    component: FindBookPageComponent,
    data: { title: 'Find book' },
  },
  {
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard],
    data: { title: 'Book details' },
  },
  {
    path: '',
    component: CollectionPageComponent,
    data: { title: 'Collection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
