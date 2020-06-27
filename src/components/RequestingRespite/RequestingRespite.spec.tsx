import React from 'react';
import "@testing-library/jest-dom";
import { render, RenderResult } from "@testing-library/react";

import { RequestingRespite } from "./RequestingRespite";

describe("RequestingRespite", () => {
    it("can render", () => {
        const document: RenderResult = render(<RequestingRespite />);

        expect(document.getByText("Hello, World!")).toBeInTheDocument();
    });
});
