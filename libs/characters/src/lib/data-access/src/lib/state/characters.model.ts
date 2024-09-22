/**CHARACTERS*/
import { Character, ListUI } from '@characters/util/model';

/**SHARED*/
import { UIStateMachine } from '@shared/util/model';

export type CharactersStateMachine = UIStateMachine<Character[], ListUI >

export interface CharactersState {
  characters: CharactersStateMachine
}
