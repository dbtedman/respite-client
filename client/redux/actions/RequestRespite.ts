import { AnyAction } from "redux";

import { RequestRespiteState } from "../reducers/RequestRespite";

export const UPDATE_REQUEST_RESPITE = "UPDATE_REQUEST_RESPITE";

export const updateRequestRespiteAction = (
    payload: RequestRespiteState
): AnyAction => {
    return {
        type: UPDATE_REQUEST_RESPITE,
        payload,
    };
};
