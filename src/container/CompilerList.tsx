import {
  CompilerListComponent,
  CompilerListComponentProps
} from "../component/CompilerList/CompilerListComponent";
import { CompilerListState } from "../state/CompilerList/CompilerListState";
import { connect } from "react-redux";

function stateToProps(state: CompilerListState): CompilerListComponentProps {
  return { compilerList: state };
}

export default connect(stateToProps)(CompilerListComponent);
