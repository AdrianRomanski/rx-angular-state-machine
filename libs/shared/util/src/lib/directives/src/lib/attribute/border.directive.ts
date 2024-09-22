/**ANGULAR*/
import { Directive, HostBinding, Input } from '@angular/core';

/**SHARED*/
import { BorderUI } from '@shared/util/model';

@Directive({
  standalone: true,
  selector: '[sharedBorder]'
})
export class SharedBorderDirective {
  @Input() set sharedBorder(borderUI: BorderUI) {
    this.borderStyle = `${borderUI.size} ${borderUI.type} ${borderUI.color}`;
  }

  @HostBinding('style.border')
  borderStyle = `10px solid blue`;
}
