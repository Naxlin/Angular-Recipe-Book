import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private eleRef: ElementRef) { }
  
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
