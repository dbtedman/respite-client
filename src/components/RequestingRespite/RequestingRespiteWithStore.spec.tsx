import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import RequestingRespiteWithStore from "./RequestingRespiteWithStore";
import { RequestRespiteState } from "redux/reducers/RequestRespite";

describe("RequestingRespiteWithStore", () => {
    const anyName = "Some Requester Name";
    const anyLessonName = "Some Lesson Description";
    const anyLessonLocation = "Somewhere";

    beforeEach(() => {
        const store = createStore((): { requestRespite: RequestRespiteState } => ({
            requestRespite: {
                name: anyName,
                lessonDescription: anyLessonName,
                lessonLocation: anyLessonLocation,
            },
        }));
        render(
            <Provider store={store}>
                <RequestingRespiteWithStore />
            </Provider>
        );
    });

    it("contains populated requester's name", () => {
        expect((screen.getByLabelText(/Name/) as HTMLInputElement).value).toBe(
            anyName
        );
    });

    it("contains populated lesson name", () => {
        expect(
            (screen.getByLabelText(/Lesson Description/) as HTMLInputElement)
                .value
        ).toBe(anyLessonName);
    });

    it("contains populated lesson location", () => {
        expect(
            (screen.getByLabelText(/Lesson Location/) as HTMLInputElement)
                .value
        ).toBe(anyLessonLocation);
    });
});
