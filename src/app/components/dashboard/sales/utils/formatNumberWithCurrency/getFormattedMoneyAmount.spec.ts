import formatNumberWithCurrency, { formatNumber, formatCurrency } from ".";
import { DEFAULT_CURRENCY } from "../../../../../utils/constants";

describe("formatNumber", () => {
  it("should format a number with thousands separator", () => {
    expect(formatNumber(1234567)).toBe("1,234,567");
  });

  it("should handle string input", () => {
    expect(formatNumber("1234567")).toBe("1,234,567");
  });
});

describe("formatCurrency", () => {
  it("should add currency symbol to the value", () => {
    expect(formatCurrency("1234567", "€")).toBe("€ 1234567");
  });

  it("should use default currency symbol if not provided", () => {
    expect(formatCurrency("1234567")).toBe(`${DEFAULT_CURRENCY} 1234567`);
  });
});

describe("formatNumberWithCurrency", () => {
  it("should format a number and add currency symbol", () => {
    expect(formatNumberWithCurrency(1234567, "€")).toBe("€ 1,234,567");
  });

  it("should handle string input and add currency symbol", () => {
    expect(formatNumberWithCurrency("1234567", "€")).toBe("€ 1,234,567");
  });

  it("should use default currency symbol if not provided", () => {
    expect(formatNumberWithCurrency(1234567)).toBe(
      `${DEFAULT_CURRENCY} 1,234,567`
    );
  });
});
