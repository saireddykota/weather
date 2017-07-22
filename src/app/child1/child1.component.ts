import { Component, OnInit } from '@angular/core';
//import {MyServiceService} from '../my-service.service'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }//private newService :MyServiceService(<---inside)

  ngOnInit() {
  


 
 //console.log(this.newService.obj)
 // console.log(this.newService.success())
}
}