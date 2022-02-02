import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';

const config = {
  apiKey: 'AIzaSyAJHynjlMW7nWd_JUsFK3cx-U8QRGe_ZpI',
  authDomain: 'chatgs3.firebaseapp.com',
  databaseURL: 'https://chatgs3-default-rtdb.firebaseio.com',
  projectId: 'chatgs3',
  storageBucket: 'chatgs3.appspot.com',
  messagingSenderId: '788817507994',
  appId: '1:788817507994:web:f29f3c80ab6250b0e8d123',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
