import {
  Directive,
  ElementRef,
  Input,
  OnInit, TemplateRef, ViewContainerRef
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngCustomIf]'
})
export class StructuralDirective implements OnInit {
  // @Input('ngCustomIf') ngCustomIf;
  hasView = false;
  @Input('ngCustomIf') set ngCustomIf(condition: boolean) {
    if (condition && !this.hasView) {
      this.container.createEmbeddedView(this.template);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.container.clear();
      this.hasView = false;
    }
  }
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
  }
}
