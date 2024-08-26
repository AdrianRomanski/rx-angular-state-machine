/**ANGULAR*/
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**INTERNALS*/
import { TemplateModalFormBridge } from './template-modal-form-bridge.interface';
import { TEMPLATE_MODAL_FORM } from './template-modal-form.token';

@Component({
  selector: 'shared-ui-template-modal-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './template-modal-form.component.html',
  providers: [
    {
      provide: TEMPLATE_MODAL_FORM,
      useExisting: TemplateModalFormComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateModalFormComponent implements TemplateModalFormBridge {
  @Input()
  formGroup!: FormGroup;

  get(): FormGroup {
    return this.formGroup.value as FormGroup;
  }
}
