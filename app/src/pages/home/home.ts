import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from '../list/list';
import {CardPage} from '../card/card';
import {FloatPage} from '../float/float';
import {GesturePage} from '../gesture/gesture';
import {GridPage} from '../grid/grid';
import {FormPage} from '../form/form';
import {ToastPage} from '../toast/toast'
import {AlertPage} from '../alert/alert'
import {IconPage} from '../icon/icon'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonPage;
  listPage;
  cardPage;
  floatPage;
  gesturePage;
  gridPage;
  formPage;
  toastPage;
  alertPage;
  iconPage;
  constructor(public navCtrl: NavController) {
    this.buttonPage=ButtonPage;
    this.listPage=ListPage;
    this.cardPage=CardPage;
    this.floatPage=FloatPage;
    this.gesturePage=GesturePage;
    this.gridPage=GridPage;
    this.formPage=FormPage;
    this.toastPage=ToastPage;
    this.alertPage=AlertPage;
    this.iconPage=IconPage;
  }


}
