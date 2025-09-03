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

// Register required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Time spent this Week" },
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
