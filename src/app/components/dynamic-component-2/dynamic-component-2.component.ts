import { Component, OnInit, Compiler, Injector, NgModuleRef, NgModule, ViewContainerRef, ViewChild, Input, ComponentRef } from '@angular/core';
import { SimpleComponentComponent } from '../simple-component/simple-component.component';
import { MyCommonModule } from '../../my-common/my-common.module';

@Component({
  selector: 'app-dynamic-component-2',
  templateUrl: './dynamic-component-2.component.html',
  styleUrls: ['./dynamic-component-2.component.css']
})
export class DynamicComponent2Component implements OnInit {
  @Input() myInput: any;
  @ViewChild('vc', { read: ViewContainerRef }) _container: ViewContainerRef;

  cmpRef: ComponentRef<any>;

  constructor(private _compiler: Compiler,
    private _injector: Injector,
    private _m: NgModuleRef<any>) { }

  ngOnInit() {
    this.myInput = {
      textForTemplate: 'Input'
    };

  }

  ngAfterViewInit() { }


  onChange() {
    alert(this.myInput.textForTemplate);
    let template = this.myInput.textForTemplate;

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    this.renderTemplate(template);
  }


  renderTemplate(template) {
    const tmpModule = this.getModuleByTemplate(template);
    this.compileModule(tmpModule);
  }

  compileModule(tmpModule) {
    this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories[1]; // this should be find by selector of the component, otherwise we might pick up the wrong componentFactory. in case the selector must be declared inside the component inside the module
        this.cmpRef = f.create(this._injector, [], null, this._m);
        this.cmpRef.instance.name = 'B component';
        this._container.insert(this.cmpRef.hostView);
      })
  }

  getModuleByTemplate(template) {
    const tmpCmp = Component({
      template: template
    })(class { });

    const tmpModule = NgModule({
      declarations: [tmpCmp],
      imports: [MyCommonModule]
    })(class { });
    return tmpModule;
  }


}



// put in input <app-simple-component></app-simple-component>world<app-simple-component></app-simple-component>
// from https://hackernoon.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
// https://github.com/maximusk/Here-is-what-you-need-to-know-about-dynamic-components-in-Angular/blob/master/app/on-the-fly/a.component.ts
