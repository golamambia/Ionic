import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(private http: HTTP) {}
	
	this.http.get('http://www.webtechnomind.com/work/crud_api/api/test_api.php?action=fetch_all', {}, {})
  .then(data => {
	alert(data);
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {
alert(data);
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
}
