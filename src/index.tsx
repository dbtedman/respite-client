import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { RequestingRespite } from "./components/RequestingRespite/RequestingRespite";

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <RequestingRespite />
    </React.Fragment>,
    document.getElementById("root")
);
