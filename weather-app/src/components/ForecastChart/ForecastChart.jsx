import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer height={250} width='95%'>
      <LineChart
        margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
        data={data}
      >
        <XAxis dataKey='dayHour' />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='max' stroke='#81b214' />
        <Line type='monotone' dataKey='min' stroke='#126e82' />
      </LineChart>
    </ResponsiveContainer>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.shape({
    dayHour: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastChart;
