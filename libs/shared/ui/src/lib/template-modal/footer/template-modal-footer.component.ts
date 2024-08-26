/**ANGULAR*/
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**DEPENDENCIES*/
import { merge, mergeAll, Observable } from 'rxjs';

/**INTERNALS*/
import { TemplateModalFooterBridge } from './template-modal-footer-bridge.interface';
import { TEMPLATE_MODAL_FOOTER } from './template-modal-footer.token';

/**SHARED*/
import {
  ActionButtonDirective,
  CloseButtonDirective,
  SubmitButtonDirective,
} from '@shared/util/directives';
import { StateMachine } from '@shared/util/model';

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
export class TemplateModalFooterComponent implements OnInit, TemplateModalFooterBridge {
  @ContentChild(SubmitButtonDirective, { static: true })
  submitButtonDirective!: SubmitButtonDirective;

  @ContentChild(CloseButtonDirective, { static: true })
  closeButtonDirective!: CloseButtonDirective;

  // @ts-ignore
  @ContentChildren(ActionButtonDirective, { static: true })
  actionButtonDirectives!: QueryList<ActionButtonDirective>;

  @Output()
  closeButtonClick = new EventEmitter<void>();

  @Output()
  submitButtonClick = new EventEmitter<void>();

  @Output()
  actionButtonClick = new EventEmitter<StateMachine<any>>();

  ngOnInit(): void {
    this.closeButtonListener();
    this.submitButtonListener();
    this.actionButtonsListener();
  }

  private submitButtonListener(): void {
    this.submitButtonDirective?.submitButtonClick
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.submitButtonClick.emit());
  }

  private closeButtonListener(): void {
    this.closeButtonDirective?.closeButtonClick
       .pipe(takeUntilDestroyed())
      .subscribe(() => this.closeButtonClick.emit());
  }

  private actionButtonsListener(): void {
    const actions$: Observable<string>[] = this.actionButtonDirectives.map(
      (actionButton: ActionButtonDirective) => {
        return actionButton.actionButtonClick.asObservable();
      },
    );
    merge(actions$)
      .pipe(mergeAll(),takeUntilDestroyed())
      .subscribe((action: string): void => {
        this.actionButtonClick.emit({ action });
      });
  }
}