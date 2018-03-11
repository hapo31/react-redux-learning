import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { CompilerList } from "./domain/compiler/CompilerList";
import reducer from "./Reducer";
import { CompilerListComponent } from "./component/CompilerList/CompilerListComponent";

export type AppComponentProps = {};
export type AppComponentState = {
  compilerList: CompilerList;
};

const store = createStore(reducer);

export default class AppComponent extends React.Component<
  AppComponentProps,
  AppComponentState
> {
  componentWillMount() {}
  render() {
    return (
      <>
        <CompilerListComponent />
      </>
    );
  }
}
