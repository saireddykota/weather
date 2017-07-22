import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import {SortPipe} from './app.sort';
//import {MyServiceService} from './my-service.service';
@NgModule({
  declarations: [
    SortPipe,//to use this pipe in appcomponent you have to declare before appcomponent
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([ {
      path:'child1', component:Child1Component}])
  ],
  providers: [],       //MyServiceService(keep this inside providers)
  bootstrap: [AppComponent]
})
export class AppModule { }
