import { render, screen } from "@testing-library/react";
import NumberCard from "../components/NumberCard";

describe("Tests for NumberCard", () => {
    test("Shows number and description", () => {
        const cardNumber = 40;
        const cardDescription = "Days";

        render(
            <NumberCard number={cardNumber} description={cardDescription} />
        );

        const numberElement = screen.getByText(`${cardNumber}`);
        const descriptionElement = screen.getByText(`${cardDescription}`);

        expect(numberElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });

    test("if single digit adds a leading zero", () => {
        const cardNumber = 8;
        const cardDescription = "Days";

        render(
            <NumberCard number={cardNumber} description={cardDescription} />
        );

        const numberElement = screen.getByText(/08/i);
        expect(numberElement).toBeInTheDocument();
    });
});
