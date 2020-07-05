import express from "express";
import path from "path";
import helmet from "helmet";
import csp from "helmet-csp";
import bodyParser from "body-parser";

const app = express();
const port = 8082;

// eslint-disable-next-line security-node/detect-helmet-without-nocache
app.use(helmet());
app.disable("x-powered-by");
app.use(
    // https://github.com/helmetjs/csp
    csp({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'"],
            objectSrc: ["'none'"],
            reportUri: "/report-violation",
        },

        reportOnly: true,
    })
);

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
);

app.post(
    "/report-violation",
    bodyParser.json({
        type: ["json", "application/csp-report"],
    }),
    (req, res) => {
        if (req.body) {
            // eslint-disable-next-line security-node/detect-crlf
            console.log("csp violation: ", req.body);
        } else {
            console.log("csp violation: no data received!");
        }
        res.status(204).end();
    }
);

app.listen(port, () => {
    // eslint-disable-next-line security-node/detect-crlf
    console.log(`server started at http://localhost:${port}`);
});
