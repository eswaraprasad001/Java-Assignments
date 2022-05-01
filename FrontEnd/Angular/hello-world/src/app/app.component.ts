import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Lazy Load Component Demo';
  @ViewChild('lazytemp', { read: ViewContainerRef })
  private vcr!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

   async loadLazyComponent(){

       this.vcr.clear();
       const {LazyComponent} = await import('./lazy-component.component');
        this.vcr.createComponent(LazyComponent).instance.lazyMessage = "I am passed from Parent ";
      
   
    }
  

}