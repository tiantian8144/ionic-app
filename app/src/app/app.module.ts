import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ButtonPage} from '../pages/button/button';
import {ListPage} from '../pages/list/list';
import  {CardPage} from '../pages/card/card';
import {FloatPage} from '../pages/float/float';
import {GesturePage} from '../pages/gesture/gesture';
import {GridPage} from '../pages/grid/grid';
import {FormPage} from '../pages/form/form';
import {ToastPage} from '../pages/toast/toast';
import {AlertPage} from '../pages/alert/alert';
import {IconPage} from '../pages/icon/icon'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonPage,
    ListPage,
    CardPage,
    FloatPage,
    GesturePage,
    GridPage,
    FormPage,
    ToastPage,
    AlertPage,
    IconPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ButtonPage,
    ListPage,
    CardPage,
    FloatPage,
    GesturePage,
    GridPage,
    FormPage,
    ToastPage,
    AlertPage,
    IconPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
