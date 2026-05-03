import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Landing page", () => {
  it("renders the name as the page heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Sagi Dahari" }),
    ).toBeInTheDocument();
  });

  it("renders the tagline with the mono font class applied", () => {
    render(<Home />);
    const tagline = screen.getByText(
      "Backend developer — APIs, databases, secure systems.",
    );
    expect(tagline).toHaveClass("font-mono");
  });

  it("renders all three nav actions with the correct hrefs", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Read about me" })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
      "href",
      "mailto:sagidahari7@gmail.com",
    );
  });

  it("uses a mailto: link for Get in touch", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: "Get in touch" });
    expect(link.getAttribute("href")).toMatch(/^mailto:/);
  });
});
