import React from 'react'
import { Line } from 'react-chartjs-2'

const AdminChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 15],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [5, 7, 2, 8, 6, 4, 12],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 5,
            max: 20,
          },
          gridLines: {
            display: true,
          },
        },
      ],
    },
  }

  return <Line data={data} options={options} />
}

export default AdminChart
