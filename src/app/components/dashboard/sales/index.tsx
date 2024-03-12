import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import ContentWrapper from "@/ui-kit/ContentWrapper";
import { COLORS } from "@/utils/constants";

import { getRandomNumber, options } from "./helpers";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

export default function Sales() {
  const data = {
    labels,
    datasets: [
      {
        label: "Offline sales",
        data: labels.map(() => getRandomNumber()),
        backgroundColor: COLORS.blue,
      },
      {
        label: "Online sales",
        data: labels.map(() => getRandomNumber()),
        backgroundColor: COLORS.violet,
      },
    ],
  };

  return (
    <ContentWrapper
      title="Sales report"
      description="The total number of sessions within the period. It is the period time a user is actively engaged with your website, page or app, etc."
    >
      <Bar options={options()} data={data} />
    </ContentWrapper>
  );
}
