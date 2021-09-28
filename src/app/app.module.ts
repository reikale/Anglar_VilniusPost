import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { PostsModule } from './posts/posts.module';

const routes: Routes = [
  {path: '', redirectTo: '/blog', pathMatch: 'full'},
  {path: '', loadChildren: './posts/post.module#PostsModule'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MaterialModule,
    AppRoutingModule,
         CoreModule,
         ShareModule,
         BrowserAnimationsModule,
         PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
