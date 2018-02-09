import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,
  AlertController,//alert需导入
  ToastController
} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    email: '',
    username: '',
    password: '',
    gender: 'male',
    age: '',
    city: 'Shanghai'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,public alertCtrl:AlertController,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(): void {
    let url = '/signUp';
    this.httpClient.post(url, {user:this.user})
      .subscribe(
        res => {
            console.error(res);
            // todo
          if(res['status']==='exist'){
            //注册之前，查询邮箱存在不能注册
            this.alertCtrl.create({
              title:'Error',
              subTitle:'Email is already exist.',
              buttons:['OK']
            }).present();
          }else if(status==='err'){
            //insert时发生了其他错误
            this.toastCtrl.create({
              message:'服务器错误',
              duration:1000,
              position:'middle'
            }).present();
          }else {
            //status是ok
            //页面跳转到homepage
            this.navCtrl.push('TestPage');
          }
        },
        err => {
            console.error(err);
            // todo
        }
      );
  }
}
