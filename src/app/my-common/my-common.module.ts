import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleComponentComponent } from '../components/simple-component/simple-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    SimpleComponentComponent
  ],
  exports: [SimpleComponentComponent],
  declarations: [SimpleComponentComponent,]
})
export class MyCommonModule { }
