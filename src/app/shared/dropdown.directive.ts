import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @Input() appClass: string;
  @HostBinding('class.open') isOpen = false;

  // constructor(private tRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  constructor() {}

  @HostListener('click') toggleDropdown(data: Event){
    this.isOpen = !this.isOpen;
  } 
}
