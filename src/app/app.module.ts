import { DynamicComponent2Component } from './components/dynamic-component-2/dynamic-component-2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyCommonModule } from './my-common/my-common.module';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { UnknownDynamicComponentComponent } from './components/unknown-dynamic-component/unknown-dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    UnknownDynamicComponentComponent,
    DynamicComponent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyCommonModule
  ],
  entryComponents: [
    DynamicComponentComponent,
    UnknownDynamicComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
