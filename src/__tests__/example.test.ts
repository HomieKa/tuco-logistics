import { describe, it, expect } from "vitest";

describe("Example Test Suite", () => {
  it("should pass a basic test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should work with strings", () => {
    const greeting = "Hello, TUCO!";
    expect(greeting).toContain("TUCO");
  });

  it("should work with arrays", () => {
    const services = ["Freight Management", "Warehousing", "Fleet Management"];
    expect(services).toHaveLength(3);
    expect(services).toContain("Freight Management");
  });
});
