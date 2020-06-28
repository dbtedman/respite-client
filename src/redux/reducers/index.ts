import { combineReducers } from "redux";

import { requestRespite, RequestRespiteState } from "./RequestRespite";

export interface RootReducerState {
    requestRespite: RequestRespiteState;
}

export const rootReducer = combineReducers({
    requestRespite,
});
