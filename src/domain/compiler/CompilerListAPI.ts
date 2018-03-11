import { environment } from "../../enverionment";
import { CompilerInfo } from "./CompilerAPIResponse";
export default class CompilerListAPI {
  static async fetch() {
    const response = await fetch(
      `${environment.URL.wandboxBaseurl}/api/compile.json`
    );
    return (await response.json()) as CompilerInfo[];
  }
}
