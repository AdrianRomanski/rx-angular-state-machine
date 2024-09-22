/**ANGULAR*/
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[sharedCloseBtn]',
  standalone: true,
})
export class CloseButtonDirective {
  @Output()
  closeButtonClick: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('click', ['$event']) onClick(): void {
    this.closeButtonClick.emit();
  }
}
