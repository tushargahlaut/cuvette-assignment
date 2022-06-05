import "./ComparisonGraph.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
     scales:{
       yAxes:[{
         gridLines:{
           display: false
         },
         ticks:{
           display:true
         }
       }]
     
    },
  };
  
  const labels = ['0', '20%', '40%', '60%', '80%', '100%'];
  
  
const data = {
  labels: labels,
  datasets: [{
    label: 'Percentile',
    data: [0, 20, 40, 20, 30, 10, 20],
    fill: false,
    borderColor: 'rgb(67, 138, 246)',
    tension: 0.2
  }]
};
const ComparisonGraph = ({percentile}) => {
    return ( 
        <div className="cg__container">
            <div className="cg__header">
                <div className="cg__heading">Comparison Graph</div>
                <div className="cg__graphemoji">📈</div>
            </div>
            <div className="cg__explanation">
                <p>You scored {percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
            </div>
            <div className="cg__graph">
            <Line options={options} data={data} />
            </div>
        </div>
     );
}
 
export default ComparisonGraph;