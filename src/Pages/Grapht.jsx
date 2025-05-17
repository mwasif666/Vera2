import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", odds: 2.5 },
  { name: "Feb", odds: 3.1 },
  { name: "Mar", odds: 1.8 },
  { name: "Apr", odds: 2.9 },
  { name: "May", odds: 3.3 },
];

const OddsGraph = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        padding: "20px",
        backgroundColor: "#f8fafc",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e293b",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Odds Trend Analysis
      </h2>

      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#64748b" }}
              axisLine={{ stroke: "#cbd5e1" }}
            />
            <YAxis
              tick={{ fill: "#64748b" }}
              axisLine={{ stroke: "#cbd5e1" }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="odds"
              stroke="#6366f1"
              strokeWidth={2}
              activeDot={{ r: 8, fill: "#6366f1" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p
        style={{
          marginTop: "10px",
          color: "#64748b",
          fontSize: "0.875rem",
        }}
      >
        Data updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default OddsGraph;
