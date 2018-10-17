import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecollectionListComponent } from './components/recollection-list/recollection-list.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
