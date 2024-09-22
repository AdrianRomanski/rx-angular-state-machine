export type ActionStateMachine<ACTION extends string> = { action: ACTION };

export type UIStateMachine<DATA extends object, UI extends object> = {
  data: DATA,
  ui: UI
}
