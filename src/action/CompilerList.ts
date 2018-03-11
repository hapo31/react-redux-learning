import { Action } from "./Action";
import { CompilerItem } from "../domain/compiler/CompilerItem";

export const FETCH = "COMPILERLIST_FETCH";

class CompilerListFetchAction implements Action<CompilerItem> {
  type = FETCH;
}

export const FETCHLIST = () => {
  return new CompilerListFetchAction();
};
