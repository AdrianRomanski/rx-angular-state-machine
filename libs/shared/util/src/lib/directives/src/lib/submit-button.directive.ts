/**ANGULAR*/
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[sharedSubmitBtn]',
  standalone: true,
})
export class SubmitButtonDirective {
  @Output()
  submitButtonClick: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('click', ['$event']) onClick(): void {
    this.submitButtonClick.emit();
  }
}
