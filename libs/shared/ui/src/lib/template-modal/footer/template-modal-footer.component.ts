/**ANGULAR*/
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  contentChildren,
  EventEmitter,
  Output
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

/**DEPENDENCIES*/
import { EMPTY, merge, switchMap, tap } from 'rxjs';
import { rxEffects } from '@rx-angular/state/effects';

/**INTERNALS*/
import { TemplateModalFooterBridge } from './template-modal-footer-bridge.interface';
import { TEMPLATE_MODAL_FOOTER } from './template-modal-footer.token';

/**SHARED*/
import {
  ActionButtonDirective,
  CloseButtonDirective,
  SubmitButtonDirective,
} from '@shared/util/directives';
import { ActionStateMachine } from '@shared/util/model';

@Component({
  selector: 'shared-ui-template-modal-footer',
  standalone: true,
  imports: [SubmitButtonDirective, CloseButtonDirective],
  templateUrl: './template-modal-footer.component.html',
  styleUrls: ['./template-modal-footer.component.scss'],
  providers: [
    {
      provide: TEMPLATE_MODAL_FOOTER,
      useExisting: TemplateModalFooterComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateModalFooterComponent implements TemplateModalFooterBridge {
  submitButtonDirective = contentChild(SubmitButtonDirective);
  submitButtonDirective$ = toObservable(this.submitButtonDirective);

  closeButtonDirective = contentChild(CloseButtonDirective);
  closeButtonDirective$ = toObservable(this.closeButtonDirective);

  actionButtonDirectives = contentChildren(ActionButtonDirective);
  actionButtonDirectives$ = toObservable(this.actionButtonDirectives);

  @Output()
  closeButtonClick = new EventEmitter<void>();

  @Output()
  submitButtonClick = new EventEmitter<void>();

  @Output()
  actionButtonClick = new EventEmitter<ActionStateMachine<any>>();

  readonly effects = rxEffects(({ register }) => {
    register(
      this.submitButtonDirective$.pipe(
        switchMap(dir => dir?.submitButtonClick ?? EMPTY)
      ),
      () => this.submitButtonClick.emit()
    );
    register(
      this.closeButtonDirective$.pipe(
        switchMap(dir => dir?.closeButtonClick ?? EMPTY)
      ),
      () => this.submitButtonClick.emit()
    );
    register(
      this.actionButtonDirectives$.pipe(
        switchMap(buttons => merge(
          ...buttons.map(
            (actionButton: ActionButtonDirective) => {
              return actionButton.actionButtonClick.pipe(
                tap(action => {
                  this.actionButtonClick.emit({ action });
                })
              )
            },
          )
        ))
      )
    )
  })
}
