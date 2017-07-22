import { Component } from '@angular/core';
 import{FormGroup, FormControl, Validators } from '@angular/forms';
//import {MyServiceService} from './my-service.service';
import{Http,Response} from '@angular/http';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private http:Http){}
     cityName='';
    
searchCity(){
  this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=b02a71feefc4e03aec524630084f0c9c=' + this.cityName )
  .subscribe(
    (res:Response)=>{
    const weatherCity =res.json();
    console.log(weatherCity);
  })
}


}
  //constructor(private newService :MyServiceService){}
 //ngOnInit(){
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
 //002bc7a0e984a4a305584ecc4f021fe1
// console.log(this.newService.obj)
 // console.log(this.newService.success())
//}
 
 
 /*form;
 ngOnInit(){
   this.form =new FormGroup({
   firstname: new FormControl(""),
   lastname: new FormControl(""),
   language: new FormControl("")

 });console.log();
 }*/
 //sai ={name :"ias"}


//arr =['venkata','sairikb','kumarc'];

//isTrue = true;
/*newItem ="";
pushItem = function(){
  if(this.newItem !=""){
    this.arr.push(this.newItem);
    this.newItem ="";
  }
}
removeItem = function(index){
this.arr.splice(index, 1);

}*/
//name="sai";
//date=new Date();


//onSubmit = function(user){
 // console.log(user);
//}
/*form;
ngOnInit(){ //it is a built in function that automatically triggers
  this.form = new FormGroup({

decimal: new FormControl(""),
binary: new FormControl(""),
octal: new FormControl(""),
hexa: new FormControl(""),
  });


  
}
decimalChanged = function(oldValue, newValue){
this.form.patchValue({binary: parseInt(newValue,10).toString(2)});

}
*/

