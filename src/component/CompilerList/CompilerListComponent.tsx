import * as React from "react";
import { CompilerListState } from "../../state/CompilerList/CompilerListState";
import CompilerListAPI from "../../domain/compiler/CompilerListAPI";

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
      <>
        <div className="CompierListCompinent FetchButton">
          <button onClick={this.onFetchButtonClick}>取得</button>
        </div>
        <div className="CompilerListComponent">
          {(() => {
            if (this.state.compilerList) {
              const { item } = this.state.compilerList;
              return item !== null ? (
                <ul className="CompilerListComponent-compilers">
                  {item.items.map(v => (
                    <li key={`${v.language}-${v.version}`}>
                      {v.displayName} ({v.version})
                    </li>
                  ))}
                </ul>
              ) : null;
            }
          })()}
        </div>
      </>
    );
  }

  private onFetchButtonClick = async () => {
    const response = await CompilerListAPI.fetch();
    this.setState(
      this.state.compilerList.update({
        item: response
      })
    );
  };
}
