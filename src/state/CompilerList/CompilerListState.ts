import { CompilerList } from "../../domain/compiler/CompilerList";
import { State } from "../State";

export class CompilerListState extends State<CompilerListState> {
  public selectedLanguage = -1;
  public selectedCompiler = -1;
  public item: CompilerList | null = null;
}
