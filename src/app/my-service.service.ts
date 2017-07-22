/*import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MyServiceService {

  constructor(public http: Http) { 
    console.log("hey data provider");
  }
   headers = new Headers({'Content-Type': 'application/json'});
  getRemoteData(){
    // getPosts(): Observable<[]>{
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+  +"&format=json&callback=?"
    this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });}
/*obj = {
  id:"123",
  name:"sai"
}
success(){
  return "Successful";
}*/
  //}

