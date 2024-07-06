"use client"


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



import React from 'react'

const DoughnutChart = ({accounts}:DoughnutChartProps) => {

    const data = {
        
        datasets: [
            {
                label: 'Banks',
                data:[1234,11000,4578],
                backgroundColor: ['#0747b6','#2265d8','#2f91fa']
            }
        ],

        labels:['Bank1', 'Bank2', 'Bank3']
    }

  return (
    <Doughnut data={data} 
    options={
        {
            cutout:'50%',
            plugins:{
                legend:{
                    display:false
                }
            }
        }
    }
    />
  )
}

export default DoughnutChart