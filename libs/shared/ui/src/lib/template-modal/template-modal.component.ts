/**ANGULAR*/
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild, DestroyRef, inject,
  OnInit
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

/**DEPENDENCIES*/
import { EMPTY, iif, Observable, race } from 'rxjs';

/**INTERNALS*/
import { TemplateModalFormBridge } from './form/template-modal-form-bridge.interface';
import { TemplateModalFooterBridge } from './footer/template-modal-footer-bridge.interface';
import { TemplateModalHeaderBridge } from './header/template-modal-header-bridge.interface';

import { TEMPLATE_MODAL_FOOTER } from './footer/template-modal-footer.token';
import { TEMPLATE_MODAL_FORM } from './form/template-modal-form.token';
import { TEMPLATE_MODAL_HEADER } from './header/template-modal-header.token';

/**SHARED*/
import { ActionStateMachine } from '@shared/util/model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'shared-ui-template-modal',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateModalComponent implements OnInit {
  private readonly dialogRef  = inject(MatDialogRef<TemplateModalComponent>)
  private readonly destroyRef = inject(DestroyRef)

  @ContentChild(TEMPLATE_MODAL_HEADER, { static: true })
  header!: TemplateModalHeaderBridge;

  @ContentChild(TEMPLATE_MODAL_FOOTER, { static: true })
  footer!: TemplateModalFooterBridge;

  @ContentChild(TEMPLATE_MODAL_FORM, { static: true })
  form!: TemplateModalFormBridge;

  ngOnInit(): void {
    this.submitListener();
    this.closeListener();
    this.actionListener();
  }

  private closeListener(): void {
    const headerCloseButtonClick$: Observable<void> =
      this.header.closeButtonClick.asObservable() || EMPTY;
    const footerCloseButtonClick$ =
      this.footer.closeButtonClick?.asObservable() || EMPTY;
    iif(
      (): boolean => !!this.header,
      race([headerCloseButtonClick$, footerCloseButtonClick$]),
      footerCloseButtonClick$,
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.dialogRef.close());
  }

  private submitListener(): void {
    this.footer?.submitButtonClick
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.dialogRef.close(this.form.get()));
  }

  private actionListener(): void {
    this.footer?.actionButtonClick
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((stateMachine: ActionStateMachine<NonNullable<string>>) =>
        this.dialogRef.close(stateMachine.action),
      );
  }
}
