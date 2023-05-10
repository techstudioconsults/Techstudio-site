import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const LineChart = () => {
  const chartRef = useRef()

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Users Engagement',
            data: [10, 50, 30, 20, -50, 0, -30, -25, 50, 60],
            fill: true,
            borderColor: `#0266F4`,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false,
          },
        },
        interaction: {
          intersect: false,
        },
      },
    })
  }, [])

  return <canvas ref={chartRef} />
}

export default LineChart
