import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { RequestingRespite } from "./RequestingRespite";

describe("RequestingRespite", () => {
    it("contains cta", () => {
        // Given
        render(<RequestingRespite />);

        // When, Then
        expect(screen.getByText(/Request Respite/)).toBeInTheDocument();
    });

    it("contains clear", () => {
        // Given
        render(<RequestingRespite />);

        // When, Then
        expect(screen.getByText(/Clear/)).toBeInTheDocument();
    });

    it("clear works", async () => {
        // Given
        render(
            <RequestingRespite
                name="Any Name"
                lessonDescription="Any Lesson Description"
                lessonLocation="Any Lesson Location"
            />
        );

        // When
        fireEvent.click(screen.getByText(/Clear/));

        // Then
        await expect(
            (screen.getByLabelText(/Name/) as HTMLInputElement).value
        ).toBe("");
        await expect(
            (screen.getByLabelText(/Lesson Description/) as HTMLInputElement)
                .value
        ).toBe("");
        await expect(
            (screen.getByLabelText(/Lesson Location/) as HTMLInputElement).value
        ).toBe("");
    });

    it("contains requester's name", () => {
        // Given
        render(<RequestingRespite />);

        // When, Then
        expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    });

    it("contains lesson description", () => {
        // Given
        render(<RequestingRespite />);

        // When, Then
        expect(screen.getByLabelText(/Lesson Description/)).toBeInTheDocument();
    });

    it("contains lesson location", () => {
        // Given
        render(<RequestingRespite />);

        // When, Then
        expect(screen.getByLabelText(/Lesson Location/)).toBeInTheDocument();
    });
});
