import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface LineChartProps {
  title: string;
}

const LineChart: FC<LineChartProps> = ({ title }) => {
  return (
    <div>
      <Line
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: title,
              data: [1, 3, 4, 5, 6, 6, 7],
              tension: 0.6,
              //   showLine: false,
              pointBorderWidth: 0,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
