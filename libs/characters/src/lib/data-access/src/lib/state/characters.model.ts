/**CHARACTERS*/
import { CardData, CardUI, CharacterModalData, ListUI, ModalUI } from '@characters/util/model';

/**SHARED*/
import { UIStateMachine } from '@shared/util/model';

export type CardStateMachine = UIStateMachine<CardData, CardUI>
export type CharactersStateMachine = UIStateMachine<CardStateMachine[], ListUI>
export type CharacterStateMachine = UIStateMachine<CharacterModalData, ModalUI>

export interface CharactersState {
  characters: CharactersStateMachine;
  character: CharacterStateMachine;
}
