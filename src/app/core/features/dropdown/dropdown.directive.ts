import {
  Directive,
  Input,
  TemplateRef,
  OnInit,
  OnDestroy,
  EmbeddedViewRef,
} from '@angular/core';
import { HostComponent } from '../host/host.component';

@Directive({
  selector: '[dropdown]',
})
export class DropdownDirective implements OnInit, OnDestroy {
  @Input()
  dropdown!: TemplateRef<any>;

  ref!: EmbeddedViewRef<any>;

  constructor(private readonly host: HostComponent) {}

  ngOnInit() {
    this.ref = this.host.add(this.dropdown);
    this.ref.detectChanges();
  }

  ngOnDestroy() {
    this.host.remove(this.ref);
  }
}
