import { CompilerListState } from "./state/CompilerList/CompilerListState";
import { Action } from "./action/Action";
import * as CompilerList from "./action/CompilerList";

const initialeState = {
  compilerList: new CompilerListState()
};

export default function reducer(state = initialeState, action: Action<any>) {
  switch (action.type) {
    case CompilerList.FETCH:
      return {
        compilerList: new CompilerListState()
      };
    default:
      return state;
  }
}
