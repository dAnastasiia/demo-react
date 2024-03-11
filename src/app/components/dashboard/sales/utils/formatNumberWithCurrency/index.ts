import { DEFAULT_CURRENCY } from "../../../../../utils/constants";

/**
 * Formats a string representation of a number by adding a separator for thousands.
 *
 * @param value - A string or number representing a number (e.g., "1234567").
 * @returns A formatted string with a separator for thousands (e.g., "1,234,567").
 */

const SEPARATOR = ",";
const THOUSANDS_REGEX = /\B(?=(\d{3})+(?!\d))/g;

const formatNumber = (value: string | number) => {
  return value.toString().replace(THOUSANDS_REGEX, SEPARATOR);
};

/**
 * Adds a currency symbol before the given number.
 * If the input is not a number, returns the input value as is.
 *
 * @param value - The number to format.
 * @param currency - The currency symbol to use. Default is '$'.
 * @returns The formatted value with currency symbol.
 */

const formatCurrency = (value: string, currency?: string) => {
  return `${currency || DEFAULT_CURRENCY} ${value}`;
};

/**
 * Formats a number and adds a currency symbol.
 *
 * @param value - A string or number representing a number (e.g., "1234567").
 * @param currency - The currency symbol to use. Default is '$'.
 * @returns The formatted value with currency symbol.
 */

export default (value: string | number, currency?: string) => {
  const formattedNumber = formatNumber(value);
  return formatCurrency(formattedNumber, currency);
};

export { formatNumber, formatCurrency };
