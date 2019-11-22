import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(
		
		 public storage: Storage
		) {
storage.get('myitem').then((val) => {
    console.log('Your age is', val);
  });

	}
}
