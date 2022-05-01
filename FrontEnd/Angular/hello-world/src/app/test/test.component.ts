import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public user:any;

  constructor(  private userService:UserServiceService) { }

  ngOnInit(): void {
    
this.userService.getUsers().subscribe(data=>{this.user=data})
  
  }

}





// Create an observable from a counter
// Create an observable from an event

