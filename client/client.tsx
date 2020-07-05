import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";

import { store } from "./redux/Store";
import RequestingRespiteWithStore from "./components/RequestingRespite/RequestingRespiteWithStore";

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <RequestingRespiteWithStore />
    </Provider>,
    document.getElementById("root")
);
