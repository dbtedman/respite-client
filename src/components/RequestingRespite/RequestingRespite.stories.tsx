import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { RequestingRespite } from "./RequestingRespite";

export const RequestingRespiteDefault = (): JSX.Element => (
    <React.Fragment>
        <CssBaseline />
        <RequestingRespite />
    </React.Fragment>
);

export default {
    title: "Requesting Respite",
};

RequestingRespiteDefault.story = {
    name: "default",
};
