import { Directive, HostBinding, HostListener } from '@angular/core';
import { objectLiteralExpression } from 'codelyzer/util/astQuery';
import { a } from '@angular/core/src/render3';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
