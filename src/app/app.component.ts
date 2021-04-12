import { Component,OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{

ngOnInit():void{
  // const socket =socketIo('139.59.9.250:2390');

  // socket.on('driverOnline', (data)=> console.log(data));
}
}
