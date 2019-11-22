import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

let appUrl = "http://www.webtechnomind.com/work/crud_api/api/test_api.php?action=";
@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {

	constructor(public http: Http) {
		console.log('Hello AuthServiceProvider Provider');
	}

	postData(credentials, type){
		return new Promise((resolve, reject) => {
			var headers = new Headers();
			this.http.post(appUrl+type, JSON.stringify(credentials), { headers: headers })
			.subscribe(res => {
				resolve(res.json());
			}, (err) => {
				reject(err);
			});
		});
	}
	
	sendPostRequest(postData1, type) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "first_name": "Customer004",
            "last_name": "customer004@email.com"
    }

    this.http.post(appUrl+type, postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}