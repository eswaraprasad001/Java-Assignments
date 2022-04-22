import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  show:boolean=true;
  num:number=3;
  list1:number[]=[1,2,3,4,5,6];

  ngOnInit(): void {
  }

}
