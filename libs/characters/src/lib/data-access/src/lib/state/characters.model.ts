/**CHARACTERS*/
import { CardData, CardUI, ListUI } from '@characters/util/model';

/**SHARED*/
import { UIStateMachine } from '@shared/util/model';

export type CardStateMachine = UIStateMachine<CardData, CardUI>
export type CharactersStateMachine = UIStateMachine<CardStateMachine[], ListUI>

export interface CharactersState {
  characters: CharactersStateMachine;
}
