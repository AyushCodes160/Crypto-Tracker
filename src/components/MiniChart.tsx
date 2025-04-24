import React from 'react';

interface MiniChartProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const MiniChart: React.FC<MiniChartProps> = ({ 
  data, 
  width = 100, 
  height = 40,
  trend = 'neutral'
}) => {
  if (!data || data.length === 0) return null;

  // Determine color based on trend
  const lineColor = trend === 'up' 
    ? '#10b981' 
    : trend === 'down' 
      ? '#ef4444' 
      : '#94a3b8';

  // Normalize the data between 0 and height
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  // Avoid division by zero
  const normalizedData = range === 0 
    ? data.map(() => height / 2) 
    : data.map(value => height - ((value - min) / range) * height);

  // Calculate points for the polyline
  const points = normalizedData.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    return `${x},${value}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MiniChart;