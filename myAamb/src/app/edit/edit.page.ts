import { Component } from '@angular/core';
import { AuthServiceService } from '../providers/auth-service/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
})
export class EditPage {
	datas: any;
	fname:any;
	lname:any;
	getValue:any;
	isLoading = false;
	constructor(
		
		public authService: AuthServiceService,private router: ActivatedRoute,public loadingController: LoadingController,public alertController: AlertController
		) {
		this.getValue= this.router.snapshot.paramMap.get("id");
    	//console.log(this.getValue);
		
		this.authService.postData({id:this.getValue}, 'fetch_single').then((result:any) => {
			this.datas = result;
			//this.fname=datas.first_name;
				//console.log(result);
			}, (err) => {

		});
		
		
	}
	
	
	async  update(){
	//alert(this.getValue);
		const loading = await this.loadingController.create({
    message: 'Updating...'
  });
  const alert = await this.alertController.create({
     message: 'Data successfully updated',
      buttons: ['OK']
    });
  await loading.present();

		if(this.fname && this.lname){
		this.authService.postData({'first_name':this.fname,'last_name':this.lname,'id':this.getValue}, 'update').then((result:any) => {
				//console.log(result);
				if (result[0].success==1) {
				loading.dismiss();
			alert.present();
				}
				
			}, (err) => {

		});


		}


	}

}
