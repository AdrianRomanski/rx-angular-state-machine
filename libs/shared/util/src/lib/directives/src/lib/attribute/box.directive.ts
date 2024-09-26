/**ANGULAR*/
import { Directive, HostBinding, Input } from '@angular/core';

/**SHARED*/
import { BackgroundUI, BorderUI } from '@shared/util/model';

@Directive({
  standalone: true,
  selector: '[sharedBox]'
})
export class SharedBoxDirective {
  @Input() set sharedBoxBorder(borderUI: BorderUI | undefined) {
    if(borderUI) {
      this.border = `${borderUI.size} ${borderUI.type} ${borderUI.color}`;
      this.borderRadius = borderUI.radius;
    }
  }

  @Input() set sharedBoxBackground(backgroundUI: BackgroundUI | undefined) {
    if(backgroundUI) {
     this.background = `linear-gradient(
        ${backgroundUI.position},
        ${backgroundUI.firstColor},
        ${backgroundUI.secondColor}
     )`;
     this.color = backgroundUI.fontColor;
    }
  }

  @HostBinding('style.border')
  border = `10px solid blue`;

  @HostBinding('style.border-radius')
  borderRadius = `5px`;

  @HostBinding('style.background')
  background = `linear-gradient(145deg, #2e518b, #3b64a5)`;

  @HostBinding('style.color')
  color = `white`;
}
