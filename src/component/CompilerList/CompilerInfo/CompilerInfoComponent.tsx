import * as React from "react";
import { Component } from "react";
import { CompilerItem } from "../../../domain/compiler/CompilerItem";

export type CompilerInfoComponentProps = {
  name: string;
  compilers: CompilerItem[];
};
export class CompilerInfoComponent extends Component<
  CompilerInfoComponentProps
> {
  render() {
    return (
      <div className="CompilerInfo">
        <div className="CompilerInfo-language-name">{this.props.name}</div>
        {this.props.compilers.map(compiler => (
          <>
            <div className="CompilerInfo-display-name">
              {compiler.displayName}
            </div>
            <div className="CompilerInfo-display-version">
              {compiler.version}
            </div>
          </>
        ))}
      </div>
    );
  }
}
