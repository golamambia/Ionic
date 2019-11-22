import { Component } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../providers/auth-service/auth-service.service';


@Component({
  selector: 'app-demo',
  templateUrl: 'demo.page.html',
  styleUrls: ['demo.page.scss'],
})
export class DemoPage {
	datas: any;
	fname:any;
	lname:any;
	constructor(
		
		public authService: AuthServiceService
		) {

		
		this.authService.postData({'':'tser','password':'test'}, 'fetch_all').then((result:any) => {
			this.datas = result;
				console.log(result);
			}, (err) => {

		});
		
		
	}
	
	edit(id){
		//alert(id);
		//this.navController.setRoot(edit);
		//NavController.push('HomePage');
		//this.navCtrl.push('HomePage');
		//this.navCtrl.navigateForward(EditPage);
		//this.navCtrl.push('EditPage');
		//this.navCtrl.push(EditPage, {'product' : product});
		//this.navCtrl.navigateForward('/EditPage');
		
	}
	submit(){
		
		if(this.fname && this.lname){
		this.authService.postData({'first_name':this.fname,'last_name':this.lname}, 'insert').then((result:any) => {
				console.log(result);
			}, (err) => {

		});
		}
	}

}
