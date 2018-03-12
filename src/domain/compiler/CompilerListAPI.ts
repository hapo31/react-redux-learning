import { environment } from "../../enverionment";
import { CompilerInfo } from "./CompilerAPIResponse";
import * as path from "path";

export default class CompilerListAPI {
  static async fetch(): Promise<CompilerInfo[]> {
    const response = await fetch(
      path.join(environment.URL.wandboxApiBaseurl, "list.json"),
      {
        method: "get",
        mode: "cors"
      }
    );
    return await response.json();
  }
}
