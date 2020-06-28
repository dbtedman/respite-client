import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { RequestingRespite } from "./RequestingRespite";

describe("RequestingRespite", () => {
    beforeEach(() => {
        render(<RequestingRespite />);
    });

    it("contains cta", () => {
        expect(screen.getByText(/Request Respite/)).toBeInTheDocument();
    });

    it("contains clear", () => {
        expect(screen.getByText(/Clear/)).toBeInTheDocument();
    });

    it("contains requester's name", () => {
        expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    });

    it("contains lesson description", () => {
        expect(screen.getByLabelText(/Lesson Description/)).toBeInTheDocument();
    });
});
