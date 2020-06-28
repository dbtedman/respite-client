import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import RequestingRespiteWithStore from "./RequestingRespiteWithStore";

describe("RequestingRespiteWithStore", () => {
    const anyName = "Some Requester Name";
    const anyLessonName = "Some Lesson Description";

    beforeEach(() => {
        const store = createStore(() => ({
            requestRespite: {
                name: anyName,
                lessonDescription: anyLessonName,
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
});
