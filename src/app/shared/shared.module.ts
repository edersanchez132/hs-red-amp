import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicrofrontRemotoDirective } from './directives';
import { RemotoComponent } from './components';


@NgModule({
  declarations: [
    MicrofrontRemotoDirective,
    RemotoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RemotoComponent
  ]
})
export class SharedModule { }
