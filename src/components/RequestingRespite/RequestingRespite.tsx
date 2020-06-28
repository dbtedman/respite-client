import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(3),
        },
    },
}));

export const RequestingRespite = (): JSX.Element => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="RequestingRespite-Name"
                    label="Name"
                    variant="outlined"
                    aria-describedby="RequestingRespite-NameHelpText"
                    fullWidth
                    required
                />

                <p id="RequestingRespite-NameHelpText">
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
                    multiline
                    rows={4}
                    required
                />

                <p id="RequestingRespite-LessonDescriptionHelpText">
                    Some extra information.
                </p>
            </div>

            <div>
                <Button variant="contained" color="primary">
                    Request Respite
                </Button>
            </div>
        </form>
    );
};
