/// <reference types="vitest" />
import { render } from "@testing-library/react";
import ProductCard, { Product } from "./ProductCard";

const baseProduct: Product = {
    brand: "Apple",
    title: "iPhone 15",
    href: "/mfp/123",
    newPrice: "754 €",
    usedPrice: "700 €",
    image: "https://via.placeholder.com/120",
};

describe("ProductCard (invalid data)", () => {
    it("returns null if title is missing", () => {
        const { container } = render(
            <ProductCard product={{ ...baseProduct, title: "" }} />
        );
        expect(container.firstChild).toBeNull();
    });

    it("returns null if brand is missing", () => {
        const { container } = render(
            <ProductCard product={{ ...baseProduct, brand: "" }} />
        );
        expect(container.firstChild).toBeNull();
    });

    it("returns null if image is missing", () => {
        const { container } = render(
            <ProductCard product={{ ...baseProduct, image: "" }} />
        );
        expect(container.firstChild).toBeNull();
    });

    it("returns null if href is missing", () => {
        const { container } = render(
            <ProductCard product={{ ...baseProduct, href: "" }} />
        );
        expect(container.firstChild).toBeNull();
    });

    it("returns null if newPrice is missing", () => {
        const { container } = render(
            <ProductCard product={{ ...baseProduct, newPrice: "" }} />
        );
        expect(container.firstChild).toBeNull();
    });
});
