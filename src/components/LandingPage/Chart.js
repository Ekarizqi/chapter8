import React from 'react';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import {Pie} from "react-chartjs-2"

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

const data =  {
    datasets: [{
            data: [20, 30, 10, 100 ],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
            ]
        },
    ],
        labels: [
            "Xenia",
            "Inova",
            "Brio",
            "Avanza"
        ],
        
    };

function Chart (){
    return (
        <div className='container' style={{width:"30%", height:"30%"}}>
            <Pie
                data={data}
            />
        </div>
    );
};

export default Chart;

