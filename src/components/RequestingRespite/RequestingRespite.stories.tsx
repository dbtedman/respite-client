import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { RequestingRespite } from "./RequestingRespite";

export const RequestingRespiteDefault = (): JSX.Element => (
    <React.Fragment>
        <CssBaseline />
        <RequestingRespite />
    </React.Fragment>
);

export const RequestingRespitePopulated = (): JSX.Element => (
    <React.Fragment>
        <CssBaseline />
        <RequestingRespite
            name="Jane Doe"
            lessonDescription="Currently we are covering the topic of XYZ and have reached the ABC level."
        />
    </React.Fragment>
);

export default {
    title: "Requesting Respite",
};

RequestingRespiteDefault.story = {
    name: "Default",
};

RequestingRespitePopulated.story = {
    name: "Populated",
};
