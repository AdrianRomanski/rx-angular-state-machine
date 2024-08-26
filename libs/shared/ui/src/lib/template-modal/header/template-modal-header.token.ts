/**ANGULAR**/
import { InjectionToken } from '@angular/core';

/**INTERNALS*/
import { TemplateModalHeaderBridge } from './template-modal-header-bridge.interface';

export const TEMPLATE_MODAL_HEADER =
  new InjectionToken<TemplateModalHeaderBridge>('Template Modal Header');
