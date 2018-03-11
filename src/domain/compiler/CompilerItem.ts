import {
  CompilerFlagInfo,
  CompilerFlagSelectionInfo
} from "./CompilerAPIResponse";

export class CompilerItem {
  constructor(
    public compileOptionRaw: boolean,
    public runtimeOptionRaw: boolean,
    public displayCompileCommand: string,
    public displayName: string,
    public language: string,
    public provider: number,
    public templates: string[],
    public version: string,
    public swithes: CompilerFlagInfo[] | CompilerFlagSelectionInfo[]
  ) {}
}
