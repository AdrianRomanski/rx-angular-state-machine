/**ANGULAR*/
import { Directive, HostBinding, Input } from '@angular/core';

/**SHARED*/
import { BorderUI } from '@shared/util/model';

@Directive({
  standalone: true,
  selector: '[sharedBorder]'
})
export class SharedBorderDirective {

  sharedBorder = input<BorderUI>({ size: '10px', type: 'solid', color: 'blue' });

  borderStyle = computed(() => {
    console.log('border changed', this.sharedBorder());
    return `${this.sharedBorder().size} ${this.sharedBorder().type} ${this.sharedBorder().color}`
  });
}
