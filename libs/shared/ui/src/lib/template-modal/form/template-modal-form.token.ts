/**ANGULAR*/
import { InjectionToken } from '@angular/core';

/**INTERNALS*/
import { TemplateModalFormBridge } from './template-modal-form-bridge.interface';

export const TEMPLATE_MODAL_FORM = new InjectionToken<TemplateModalFormBridge>(
  'Template Modal Form',
);
