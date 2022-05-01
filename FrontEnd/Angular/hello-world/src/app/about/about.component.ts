import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private ser:UserServiceService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    console.log(this.ser.loggedIn);
    this.ser.loggedIn=!this.ser.loggedIn;
    console.log(this.ser.loggedIn);
  }
}
