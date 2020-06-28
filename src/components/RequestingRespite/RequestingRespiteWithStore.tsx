import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { RequestingRespite } from "./RequestingRespite";
import { RootReducerState } from "../../redux/reducers";

const mapStateToProps = (state: RootReducerState) => {
    return {
        name: state.requestRespite.name,
        lessonDescription: state.requestRespite.lessonDescription,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestingRespite);
