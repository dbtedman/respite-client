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
    },
    ctaGroup: {
        "margin-top": theme.spacing(4),
    },
}));

export interface RequestingRespiteProps {
    name?: string;
    lessonDescription?: string;
    updateAction?: (payload: RequestRespiteState) => AnyAction;
}

export const RequestingRespite = (
    props: RequestingRespiteProps
): JSX.Element => {
    const { name, lessonDescription, updateAction } = props;
    const [localName, setLocalName] = useState(name === undefined ? "" : name);
    const [localLessonDescription, setLocalLessonDescription] = useState(
        lessonDescription === undefined ? "" : lessonDescription
    );
    const classes = useStyles();

    const handleUpdate = (state: RequestRespiteState) => {
        if (updateAction !== undefined) {
            updateAction(state);
        }
    };

    return (
        <Paper className={classes.wrap}>
            <form className={classes.form} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="RequestingRespite-Name"
                        label="Name"
                        variant="outlined"
                        aria-describedby="RequestingRespite-NameHelpText"
                        value={localName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setLocalName(event.target.value);
                            handleUpdate({
                                name: event.target.value,
                            });
                        }}
                        fullWidth
                        required
                    />

                    <p
                        className={classes.instructions}
                        id="RequestingRespite-NameHelpText"
                    >
                        Some extra information.
                    </p>
                </div>

                <div>
                    <TextField
                        id="RequestingRespite-LessonDescription"
                        label="Lesson Description"
                        variant="outlined"
                        aria-describedby="RequestingRespite-LessonDescriptionHelpText"
                        fullWidth
                        value={localLessonDescription}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setLocalLessonDescription(event.target.value);
                            handleUpdate({
                                lessonDescription: event.target.value,
                            });
                        }}
                        multiline
                        rows={10}
                        required
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

                <div className={classes.ctaGroup}>
                    <Button
                        className={classes.cta}
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            setLocalName("");
                            setLocalLessonDescription("");
                            handleUpdate({
                                name: undefined,
                                lessonDescription: undefined,
                            });
                        }}
                    >
                        Clear
                    </Button>
                    <Button
                        className={classes.cta}
                        variant="contained"
                        color="primary"
                    >
                        Request Respite
                    </Button>
                </div>
            </form>
        </Paper>
    );
};
