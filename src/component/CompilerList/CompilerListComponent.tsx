import * as React from "react";
import { CompilerListState } from "../../state/CompilerList/CompilerListState";
import CompilerListAPI from "../../domain/compiler/CompilerListAPI";
import { CompilerList } from "../../domain/compiler/CompilerList";
import { CompilerInfoComponent } from "./CompilerInfo/CompilerInfoComponent";

export type CompilerListComponentProps = {
  compilerList?: CompilerListState;
};

export type CompilerListComponentState = {
  compilerList: CompilerListState;
};

export class CompilerListComponent extends React.Component<
  CompilerListComponentProps,
  CompilerListComponentState
> {
  componentWillMount() {
    this.setState({
      compilerList: new CompilerListState()
    });
  }
  render() {
    return (
      <div className="CompilerListComponent">
        <div className="FetchButton">
          <button onClick={this.onFetchButtonClick}>取得</button>
        </div>
        <div className="CompilerList">
          {(() => {
            if (this.state.compilerList) {
              const { item } = this.state.compilerList;
              return item !== null
                ? item.languages.map(item => (
                    <CompilerInfoComponent
                      name={item.languageName}
                      compilers={item.compilers}
                    />
                  ))
                : null;
            }
          })()}
        </div>
      </div>
    );
  }

  private onFetchButtonClick = () => {
    return Promise.resolve().then(async () => {
      this.setState(
        this.state.compilerList.update({
          item: null
        })
      );
      const response = await CompilerListAPI.fetch();
      this.setState(
        this.state.compilerList.update({
          item: new CompilerList(response)
        })
      );
    });
  };
}
