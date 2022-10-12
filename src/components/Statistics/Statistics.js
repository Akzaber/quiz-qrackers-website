import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  const [map, setMap] = useState([]);
  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then(data => {
      const topicsLoded = data.data.data
      const topicData = topicsLoded.map(topic => {
        const name = topic.name;
        const total = topic.total;
        const singleTopic = {
          name: name,
          total: total
        }
        return singleTopic;
      })
      console.log(topicData);
      setMap(topicData);
    })
  }, [])
  return (
      <ResponsiveContainer width={400} height={300}>
        <LineChart
      className='chart'
    width={600}
    height={500}
    data={map}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
    </LineChart>
      </ResponsiveContainer>
  );
};

export default Statistics;