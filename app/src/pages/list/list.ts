import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  items=[
    'html','css','javascript','angular','node.js','react','ionic'
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  selectItem(item:string){
    console.log(`select:${item}`);
  }

}
