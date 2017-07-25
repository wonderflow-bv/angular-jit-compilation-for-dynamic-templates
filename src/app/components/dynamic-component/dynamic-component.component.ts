import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SimpleComponentComponent } from '../simple-component/simple-component.component';
import { UnknownDynamicComponentComponent } from '../unknown-dynamic-component/unknown-dynamic-component.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  @Input() type: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.type) {
      let componentType = this.getComponentType(this.type);
      debugger
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);
      // this.componentRef.instance.
      console.log('-->')
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  getComponentType(type) {
    let mapping = {
      'app-simple-component': SimpleComponentComponent || UnknownDynamicComponentComponent
    };

    return mapping[type];
  }

}


// https://medium.com/@DenysVuika/dynamic-content-in-angular-2-3c85023d9c36
