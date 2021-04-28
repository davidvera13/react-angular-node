import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') appHighlight;

  constructor(private elt: ElementRef) {
    // alert('Adding attribute directive');
    // elt.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
    this.elt.nativeElement.style.backgroundColor = this.appHighlight;
  }


}
