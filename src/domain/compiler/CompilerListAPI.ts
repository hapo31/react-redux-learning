import { environment } from "../../enverionment";
import { CompilerInfo } from "./CompilerAPIResponse";
import * as path from "path";

export default class CompilerListAPI {
  static async fetch() {
    const response = await fetch(
      path.join(environment.URL.wandboxApiBaseurl, "compile.json"),
      {
        method: "get",
        mode: "cors"
      }
    );
    return (await response.json()) as CompilerInfo[];
  }
}
