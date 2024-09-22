/**ANGULAR**/
import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[sharedActionBtn]',
  standalone: true,
})
export class ActionButtonDirective {
  @Output()
  actionButtonClick = new EventEmitter<string>();

  @Input()
  action = 'unknown';

  @HostListener('click', ['$event']) onClick(): void {
    this.actionButtonClick.emit(this.action);
  }
}
