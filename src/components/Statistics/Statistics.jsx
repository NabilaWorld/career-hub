import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Statistics = () => {
  const marks = [
    { name: 'Assignment_1', value: 47 },
    { name: 'Assignment_2', value: 58 },
    { name: 'Assignment_3', value: 60 },
    { name: 'Assignment_4', value: 60 },
    { name: 'Assignment_5', value: 60 },
    { name: 'Assignment_6', value: 60 },
    { name: 'Assignment_7', value: 60 },
    { name: 'Assignment_8', value: 60 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={marks}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {marks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
