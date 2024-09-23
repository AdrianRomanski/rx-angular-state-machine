/**SHARED*/
import { BorderUI, BoxUI } from '@shared/util/model';

export interface ListUI {
  border: BorderUI;
  accent: string;
}

export interface CardUI {
  box: BoxUI;
  raceColor: string;
  classColor: string;
}
