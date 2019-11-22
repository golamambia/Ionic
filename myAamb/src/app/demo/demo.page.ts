import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../providers/auth-service/auth-service.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-demo',
  templateUrl: 'demo.page.html',
  styleUrls: ['demo.page.scss'],
})
export class DemoPage {
	datas: any;
	fname:any;
	lname:any;
	id:any;
	constructor(
		
		public authService: AuthServiceService, public storage: Storage, public nativeStorage: NativeStorage,public navCtrl: NavController,public loadingController: LoadingController,public alertController: AlertController
		) {

		
	this.fetch_all();

	}
		
	async fetch_all(){
	const loading = await this.loadingController.create({
    message: 'Loading...'
  });
  await loading.present();
	this.authService.postData({'user':'tser','password':'test'}, 'fetch_all').then((result:any) => {
	if (result[0].id!=='') {
				loading.dismiss();
			this.datas = result;
				//console.log(result[0].id);
				}
			}, (err) => {

		});
	}
	



	edit(id){
		//alert(id);
		
		this.navCtrl.navigateForward('/edit/'+id);
		
	}
	async submit(){
		const loading = await this.loadingController.create({
    message: 'Saving...'
  });
  const alert = await this.alertController.create({
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message: 'Data successfully saved',
      buttons: ['OK']
    });
  await loading.present();

		if(this.fname && this.lname){
		this.authService.postData({'first_name':this.fname,'last_name':this.lname}, 'insert').then((result:any) => {
				//console.log(result[0].success);
				if (result[0].success==1) {
					this.storage.set('myitem', "golam");
				loading.dismiss();
			alert.present();
				this.fname='';
				this.lname='';
				this.fetch_all();
				}
				//this.navCtrl.navigateForward('demo');
			}, (err) => {

		});
		}
	}
	async delete(id){
	
		const alert = await this.alertController.create({
     
      message: 'Are you sure to delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            //console.log('Confirm Okay');
            if(id){
		this.authService.postData({'id':id}, 'delete').then((result:any) => {
				//console.log(result.success);
				if (result[0].success==1) {
				this.fetch_all();
			//alert.present();
				}
			}, (err) => {

		});
		}
          }
        }
      ]
    });

    await alert.present();
		
	}

}
