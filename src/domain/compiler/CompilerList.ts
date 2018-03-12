import { CompilerInfo } from "./CompilerAPIResponse";
import { CompilerItem } from "./CompilerItem";

export class CompilerList {
  private _languages: LanguageSet[] = [];

  constructor(compilerList: CompilerInfo[]) {
    const keys = Object.assign({});
    for (let v of compilerList) {
      const { language } = v;
      // 新しい言語だったら追加
      if (!keys[language]) {
        this._languages.push(new LanguageSet(language));
        keys[language] = true;
      }
      this._languages[this._languages.length - 1].appendCompiler(
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
  }

  public get languages() {
    return this._languages;
  }
}

export class LanguageSet {
  private _compilers: CompilerItem[] = [];

  constructor(public languageName: string) {}

  public appendCompiler(item: CompilerItem) {
    if (item.language === this.languageName) {
      this._compilers.push(item);
    }
  }

  public get compilers() {
    return this._compilers;
  }

  public set compilers(item: CompilerItem[]) {
    this._compilers = item;
  }
}
