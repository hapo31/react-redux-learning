import { CompilerInfo } from "./CompilerAPIResponse";
import { CompilerItem } from "./CompilerItem";

export class CompilerList {
  private _items: CompilerItem[];

  constructor(compilerList: CompilerInfo[]) {
    this._items = compilerList.map(
      v =>
        new CompilerItem(
          v["compiler-option-raw"],
          v["runtime-option-raw"],
          v["display-compile-command"],
          v["display-name"],
          v.language,
          v.provider,
          v.templates,
          v.version,
          v.switches
        )
    );
  }

  get items() {
    return this._items;
  }
}
