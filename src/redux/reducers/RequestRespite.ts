import { AnyAction } from "redux";

import { UPDATE_REQUEST_RESPITE } from "../actions/RequestRespite";

export interface RequestRespiteState {
    name?: string;
    lessonDescription?: string;
}

const initialState: RequestRespiteState = {};

export const requestRespite = (
    state: RequestRespiteState = initialState,
    action: AnyAction
): RequestRespiteState => {
    if (action.type === UPDATE_REQUEST_RESPITE) {
        return {
            ...state,
            ...action.payload,
        };
    }

    return state;
};
