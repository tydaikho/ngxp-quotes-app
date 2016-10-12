import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [ CommonModule, MdlModule ],
  exports: [ CommonModule, MdlModule ]
})
export class SharedModule { }
