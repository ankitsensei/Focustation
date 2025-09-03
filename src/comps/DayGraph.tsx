import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import type { ChartOptions } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DayGraph = () => {
    const data = {
        labels: ["DSA", "Gaming", "Monkeytype", "Video editing", "Web Dev"],
        datasets: [
            {
                label: "Hours",
                data: [2, 0.5, 0.1, 2, 3],
                backgroundColor: "#f5865c",
            },
        ],
    };

    const options: ChartOptions<"bar"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Total Time Spent (of all time)",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: "Hours" },
            },
        },
    };

    return (
        <div>
            <h1>Graph</h1>
            <div style={{ width: "600px", margin: "auto" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default DayGraph;
