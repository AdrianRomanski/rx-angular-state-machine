/**ANGULAR*/
import { EventEmitter } from '@angular/core';

/**SHARED*/
import { ActionStateMachine } from '@shared/util/model';

export interface TemplateModalFooterBridge {
  closeButtonClick: EventEmitter<void>;
  submitButtonClick: EventEmitter<void>;
  actionButtonClick: EventEmitter<ActionStateMachine<NonNullable<string>>>;
}
