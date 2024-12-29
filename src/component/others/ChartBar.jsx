import React, { useContext, useEffect, useState, PureComponent } from "react";
import AppContext from "../../context/AuthContext";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Rectangle,
  LabelList,
} from "recharts";
import { Tooltip } from "@mui/material";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const ChartBar = ({ data }) => {
  const context = useContext(AppContext);
  const [optionCounts, setOptionCounts] = useState({});
  useEffect(() => {
    const countOptions = () => {
      let counts = {};
      {
        data.option &&
          data.option.map((data) => {
            counts = {
              ...counts,
              [data]: 0,
            };
          });
      }

      context.quizData.forEach((user) => {
        user.quizzes.forEach((quiz) => {
          quiz.Questions.forEach((question) => {
            if (question.questionId === data.id) {
              const selectedOption = question.selectedAnswer;

              if (
                selectedOption !== undefined &&
                data.option.includes(selectedOption)
              ) {
                counts[selectedOption] = (counts[selectedOption] || 0) + 1;
              }
            }
          });
        });
      });

      setOptionCounts(counts);
    };

    if (context.quizData) {
      countOptions();
    }
  }, [context.quizData, data]);

  const chartData = Object.entries(optionCounts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="login-bg p-4">
      <h3 className="">{data.Question}</h3>
      <div className="flex items-center ">
        {data.QuestionType === "boolvalue" && (
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
        {data.QuestionType === "mcqs" && (
          <BarChart
            width={900}
            height={500}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" style={{ fontSize: "15px", fill: "white" }} />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            >
              <LabelList
                dataKey="value"
                position="middle" // Position the label on top of the bar
                style={{ fontSize: "15px", fill: "white" }} // Customize label style
              />
            </Bar>
          </BarChart>
        )}
        <div>
          {chartData.map((item, index) => {
            return (
              <div className="flex gap-2 mb-1">
                <span
                  className="block w-5 h-5 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
