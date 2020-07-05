import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { AnyAction } from "redux";

import { RequestRespiteState } from "../../redux/reducers/RequestRespite";

const useStyles = makeStyles((theme) => ({
    wrap: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    form: {
        "& > *": {
            margin: theme.spacing(2),
        },
    },
    cta: {
        "margin-right": theme.spacing(1),
    },
    instructions: {
        "max-width": "600px",
        "margin-top": theme.spacing(1),
        "margin-bottom": theme.spacing(4),
    },
    ctaGroup: {
        "margin-top": theme.spacing(4),
    },
    section: {
        "margin-top": theme.spacing(1),
        "margin-bottom": theme.spacing(2),
    },
}));

export interface RequestingRespiteProps {
    name?: string;
    lessonDescription?: string;
    lessonLocation?: string;
    updateAction?: (payload: RequestRespiteState) => AnyAction;
}

export const RequestingRespite = (
    props: RequestingRespiteProps
): JSX.Element => {
    const [name, setName] = useState(
        props.name === undefined ? "" : props.name
    );
    const [lessonDescription, setLessonDescription] = useState(
        props.lessonDescription === undefined ? "" : props.lessonDescription
    );
    const [lessonLocation, setLessonLocation] = useState(
        props.lessonLocation === undefined ? "" : props.lessonLocation
    );

    const classes = useStyles();

    const handleClear = () => {
        setName("");
        setLessonDescription("");
        setLessonLocation("");

        if (props.updateAction !== undefined) {
            props.updateAction({
                name: undefined,
                lessonDescription: undefined,
                lessonLocation: undefined,
            });
        }
    };

    const handleUpdateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);

        if (props.updateAction !== undefined) {
            props.updateAction({
                name: event.target.value,
            });
        }
    };

    const handleUpdateLessonDescription = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLessonDescription(event.target.value);

        if (props.updateAction !== undefined) {
            props.updateAction({
                lessonDescription: event.target.value,
            });
        }
    };

    const handleUpdateLessonLocation = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLessonLocation(event.target.value);

        if (props.updateAction !== undefined) {
            props.updateAction({
                lessonLocation: event.target.value,
            });
        }
    };

    return (
        <Paper className={classes.wrap}>
            <form className={classes.form} noValidate autoComplete="off">
                <h1>Request Respite</h1>

                <div className={classes.section}>
                    <TextField
                        id="RequestingRespite-Name"
                        fullWidth
                        label="Name"
                        onChange={handleUpdateName}
                        required
                        value={name}
                        variant="outlined"
                    />
                </div>

                <div className={classes.section}>
                    <TextField
                        aria-describedby="RequestingRespite-LessonDescriptionHelpText"
                        fullWidth
                        id="RequestingRespite-LessonDescription"
                        label="Lesson Description"
                        multiline
                        onChange={handleUpdateLessonDescription}
                        required
                        rows={10}
                        value={lessonDescription}
                        variant="outlined"
                    />

                    <p
                        className={classes.instructions}
                        id="RequestingRespite-LessonDescriptionHelpText"
                    >
                        Providing a clear and concise lesson description will
                        help your respite educator to continue progressing the
                        curriculum in your absence.
                    </p>
                </div>

                <div className={classes.section}>
                    <TextField
                        aria-describedby="RequestingRespite-LessonLocation"
                        fullWidth
                        id="RequestingRespite-LessonLocation"
                        label="Lesson Location"
                        onChange={handleUpdateLessonLocation}
                        required
                        value={lessonLocation}
                        variant="outlined"
                    />

                    <p
                        className={classes.instructions}
                        id="RequestingRespite-LessonLocationHelpText"
                    >
                        Providing a clear lesson location will better enable our
                        system to match your request with the correct educator.
                    </p>
                </div>

                <div className={classes.ctaGroup}>
                    <Button
                        className={classes.cta}
                        color="secondary"
                        onClick={handleClear}
                        variant="contained"
                    >
                        Clear
                    </Button>
                    <Button
                        className={classes.cta}
                        color="primary"
                        variant="contained"
                    >
                        Request
                    </Button>
                </div>
            </form>
        </Paper>
    );
};
