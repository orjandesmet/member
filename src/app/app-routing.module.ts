import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecollectionDetailComponent } from './components/recollection-detail/recollection-detail.component';
import { RecollectionListComponent } from './components/recollection-list/recollection-list.component';
import { RecollectionNewComponent } from './components/recollection-new/recollection-new.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: RecollectionListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // TODO: add resolver
  },
  {
    path: 'recollection/:recollectionId',
    component: RecollectionDetailComponent,
    // TODO: add resolver
  },
  {
    path: 'recollections/new',
    component: RecollectionNewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
