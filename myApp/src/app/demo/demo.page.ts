import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: 'demo.page.html',
  styleUrls: ['demo.page.scss'],
})
export class DemoPage {
   fname:number;
   lname:number;
   sum:number;
   
   submit(){ 
	   this.sum = this.fname + this.lname;
	   //alert(this.sum);
   }
}
