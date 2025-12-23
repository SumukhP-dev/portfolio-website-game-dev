import {
  Component,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef,
} from '@angular/core';

@Component({
  selector: 'host',
  template: '<ng-content></ng-content>',
})
export class HostComponent {
  constructor(private readonly vcr: ViewContainerRef) {}

  add(template: TemplateRef<any>): EmbeddedViewRef<any> {
    return this.vcr.createEmbeddedView(template);
  }

  remove(viewRef: EmbeddedViewRef<any>) {
    this.vcr.remove(this.vcr.indexOf(viewRef));
  }
}
