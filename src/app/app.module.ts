import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { FIREBASE_CONFIG } from '../config/firebase.config';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecollectionListItemComponent } from './components/recollection-list-item/recollection-list-item.component';
import { RecollectionListComponent } from './components/recollection-list/recollection-list.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './shared/material/material.module';
import { ProfileState } from './statemanagement/profile.state';
import { RecollectionState } from './statemanagement/recollection.state';
import { RecollectionDetailComponent } from './components/recollection-detail/recollection-detail.component';
import { RecollectionNewComponent } from './components/recollection-new/recollection-new.component';

const devPlugins = environment.production ? [] : [NgxsReduxDevtoolsPluginModule.forRoot()];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RecollectionListComponent,
    RecollectionListItemComponent,
    RecollectionDetailComponent,
    RecollectionNewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule.enablePersistence(),
    NgxsModule.forRoot([
      RecollectionState,
      ProfileState,
    ], { developmentMode: !environment.production }),
    devPlugins,
    MaterialModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
