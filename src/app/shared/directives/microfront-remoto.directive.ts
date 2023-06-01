import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMicrofrontRemoto]'
})
export class MicrofrontRemotoDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
