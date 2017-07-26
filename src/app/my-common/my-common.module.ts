import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StoreModule } from '@ngrx/store';
import { SimpleComponentComponent } from '../components/simple-component/simple-component.component';
import { todos } from '../reducers/todos';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ todos, }),
  ],
  entryComponents: [
    SimpleComponentComponent
  ],
  exports: [SimpleComponentComponent],
  declarations: [SimpleComponentComponent,]
})
export class MyCommonModule { }
