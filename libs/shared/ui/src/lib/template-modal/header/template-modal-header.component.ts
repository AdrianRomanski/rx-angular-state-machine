/**ANGULAR**/
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild, DestroyRef,
  EventEmitter, inject,
  OnInit,
  Output
} from '@angular/core';

/**INTERNALS*/
import { TEMPLATE_MODAL_HEADER } from './template-modal-header.token';
import { TemplateModalHeaderBridge } from './template-modal-header-bridge.interface';

/**SHARED**/
import { CloseButtonDirective } from '@shared/util/directives';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'shared-ui-template-modal-header',
  standalone: true,
  imports: [CloseButtonDirective],
  templateUrl: './template-modal-header.component.html',
  styleUrls: ['./template-modal-header.component.scss'],
  providers: [
    {
      provide: TEMPLATE_MODAL_HEADER,
      useExisting: TemplateModalHeaderComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateModalHeaderComponent
  implements OnInit, TemplateModalHeaderBridge
{
  private readonly destroyRef = inject(DestroyRef);

  @ContentChild(CloseButtonDirective, { static: true })
  closeButtonDirective!: CloseButtonDirective;

  @Output()
  closeButtonClick = new EventEmitter<void>();

  ngOnInit(): void {
    this.closeButtonListener();
  }

  private closeButtonListener(): void {
    this.closeButtonDirective?.closeButtonClick
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.closeButtonClick.emit());
  }
}
