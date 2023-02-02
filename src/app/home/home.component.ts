import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

age:number|string|Date = 23;
title = "My Home Page";
servers:any;

AddServer()
{
  this.servers.push('Another Server');
}
RemoveServer(id:number)
{
  const postion = id+1;
  this.servers.splice(postion,1);
}


}
