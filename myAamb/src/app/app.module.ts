import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthServiceService } from './providers/auth-service/auth-service.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
	HttpModule,
	IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
	NativeStorage,
	
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	AuthServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
