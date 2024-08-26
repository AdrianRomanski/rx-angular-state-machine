/**ANGULAR*/
import { InjectionToken } from '@angular/core';

/**INTERNALS*/
import { TemplateModalFooterBridge } from './template-modal-footer-bridge.interface';

export const TEMPLATE_MODAL_FOOTER =
  new InjectionToken<TemplateModalFooterBridge>('Template Modal Footer');
