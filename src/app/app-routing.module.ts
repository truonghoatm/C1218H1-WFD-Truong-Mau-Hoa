import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ReadListComponent} from './read-list/read-list.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {
    path: 'reading-list',
    component: ReadingListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'read-list',
    component: ReadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
