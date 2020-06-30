import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { RequestingRespite } from "./RequestingRespite";
import { RootReducerState } from "../../redux/reducers";
import { updateRequestRespiteAction } from "../../redux/actions/RequestRespite";

const mapStateToProps = (state: RootReducerState) => {
    return {
        name: state.requestRespite.name,
        lessonDescription: state.requestRespite.lessonDescription,
        lessonLocation: state.requestRespite.lessonLocation,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            updateAction: updateRequestRespiteAction,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestingRespite);
