import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Renders main page correctly", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render the main page correctly", async () => {
    // Setup
    await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const h1 = await screen.queryByText("We Are Little Giants Pet Shelter");

    // Assertions
    expect(h1).not.toBeNull();
  });

  it("Should show the footer with copyrights", async () => {
    // Setup
    await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const year = new Date().getFullYear();
    const copyrights = await screen.queryByText(
      "© " + year + " We Are Little Giants Pet Shelter. All rights reserved."
    );

    // Assertions
    expect(copyrights).not.toBeNull();
  });
});
