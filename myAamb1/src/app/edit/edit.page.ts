import { Component } from '@angular/core';
import { AuthServiceService } from '../providers/auth-service/auth-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
})
export class EditPage {
	datas: any;
	fname:any;
	lname:any;
	constructor(
		
		public authService: AuthServiceService,
		) {

		
		this.authService.postData({'':'tser','password':'test'}, 'fetch_all').then((result:any) => {
			this.datas = result;
				console.log(result);
			}, (err) => {

		});
		
		
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
