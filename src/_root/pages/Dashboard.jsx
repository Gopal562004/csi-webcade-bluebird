import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaRegCalendarAlt,
  FaUsers,
  FaBookOpen,
  FaHandsHelping,
} from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Sessions Over Time",
      data: [10, 20, 15, 30, 25, 35, 40],
      fill: false,
      borderColor: "#0000ff67", // White border color
      tension: 0.1,
      pointBackgroundColor: "#0000ff67", // White point color
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Statistics Cards */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border border-gray-200">
          <div className="flex items-center">
            <FaUsers className="text-indigo-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Mentors Available</h2>
              <p className="text-2xl">120</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border border-gray-200">
          <div className="flex items-center">
            <FaBookOpen className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Requests Received</h2>
              <p className="text-2xl">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border border-gray-200">
          <div className="flex items-center">
            <FaHandsHelping className="text-pink-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Sessions Held</h2>
              <p className="text-2xl">75</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border border-gray-200">
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
              <p className="text-2xl">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Sessions Overview</h2>
        <div className="w-full h-64">
          <Line
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  backgroundColor: "#ffffff",
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  titleColor: "#000000",
                  bodyColor: "#000000",
                  caretPadding: 4,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    color: "#e0e0e0",
                  },
                  ticks: {
                    color: "#00000",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
