import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

const data = [
    { name: "A1", value: 60 },
    { name: "A2", value: 60 },
    { name: "A3", value: 60 },
    { name: "A4", value: 60 },
    { name: "A5", value: 60 },
    { name: "A6", value: 54 },
    { name: "A7", value: 60 },
    { name: "A8", value: 60 },
];

const Statistics = () => {
    return (
        <div>
        <h1 className='my-8 text-center text-indigo-600 text-4xl font-bold'>Area Chart Of Assignment Marks</h1>
            <div className='flex justify-center mx-3'>
             <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
        </div>
        </div>
    );
};

export default Statistics;