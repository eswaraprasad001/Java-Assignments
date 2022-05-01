import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-greet',
  templateUrl: './lazy-component.component.html' 
})
export class LazyComponent implements OnInit {

  @Input()
  lazyMessage!: string;
  message!: string;  
  @Output() sendMessageEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  lazyLoader(): void {
   console.log("Success")

  }

}

@NgModule({
    declarations :[LazyComponent],
    imports:[FormsModule]
})
class GreetComponentModule{}