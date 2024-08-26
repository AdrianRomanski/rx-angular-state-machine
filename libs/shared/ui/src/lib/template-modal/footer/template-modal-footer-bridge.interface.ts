/**ANGULAR*/
import { EventEmitter } from '@angular/core';

/**SHARED*/
import { StateMachine } from '@shared/util/model';

export interface TemplateModalFooterBridge {
  closeButtonClick: EventEmitter<void>;
  submitButtonClick: EventEmitter<void>;
  actionButtonClick: EventEmitter<StateMachine<NonNullable<string>>>;
}
