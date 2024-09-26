/**ANGULAR*/
import { computed, Directive, input } from '@angular/core';

/**SHARED*/
import { BorderUI } from '@shared/util/model';

@Directive({
  standalone: true,
  selector: '[sharedBorder]',
  host: {
    '[style.border]': 'borderStyle()'
  }
})
export class SharedBorderDirective {

  sharedBorder = input<BorderUI>({ size: '10px', type: 'solid', color: 'blue', radius: '15px' });

  borderStyle = computed(() => {
    return `${this.sharedBorder().size} ${this.sharedBorder().type} ${this.sharedBorder().color}`
  });
}
