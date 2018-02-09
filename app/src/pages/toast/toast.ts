import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl:ToastController) {//在构造器里加参数
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }
  showToast():void{
    let toast=this.toastCtrl.create({
      message:'a basic toast...',
      duration:1000
    });
    toast.present();
  }
  showToastPosition(pos:string):void{
    let toast=this.toastCtrl.create({
      message:'position toast...',
      duration:2000,
      position:pos
    });
    toast.present();
  }
  showToastClose():void{
    let toast=this.toastCtrl.create({
      message:'toast with close',
      showCloseButton:true,
      closeButtonText:'ok'
    });
    toast.present();
  }

}
