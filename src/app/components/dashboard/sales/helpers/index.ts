import formatNumberWithCurrency from "../utils/formatNumberWithCurrency";

const defaultBarOptions = {
  type: "bar",
  elements: {
    bar: {
      borderWidth: 0,
      borderRadius: 16,
    },
  },
  responsive: true,
  aspectRatio: 1.8,
  devicePixelRatio: 2,
};

const DEFAULT_STEP = 100;
export const MAX_VALUE = 600;
export const MIN_VALUE = 200;

export function getRandomNumber(min = MIN_VALUE, max = MAX_VALUE) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const options = () => {
  const stepSize = DEFAULT_STEP;
  const max = MAX_VALUE + stepSize;

  return {
    ...defaultBarOptions,

    plugins: {
      legend: {
        position: "top" as const,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
        },
      },
      y: {
        max,
        border: {
          display: false,
        },
        grid: {
          display: true,
          drawOnChartArea: true,
        },
        ticks: {
          stepSize,
          callback: (value: string | number) => {
            const result = formatNumberWithCurrency(value);

            return result;
          },
        },
      },
    },
  };
};
