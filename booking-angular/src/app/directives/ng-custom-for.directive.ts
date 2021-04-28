import {
  Directive,
  ElementRef,
  Input, OnChanges,
  OnInit, SimpleChanges, TemplateRef, ViewContainerRef
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngCustomFor]'
})
export class NgCustomForDirective implements OnInit, OnChanges {

  @Input('ngCustomForOf') ngCustomForOf: Array<any>;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngCustomForOf.forEach(itemValue => {
      this.container.createEmbeddedView(this.template, { $implicit: itemValue });
    });
  }

}
