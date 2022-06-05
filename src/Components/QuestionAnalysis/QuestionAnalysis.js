import "./QuestionAnalysis.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const QuestionAnalysis = ({correctAnswers,setCorrectAnswers}) => {
  
    const data = {
        labels: [
          'Total Questions',
          'Correct Questions'
        ],
        datasets: [{
          label: 'Total Questions',
          data: [15, correctAnswers],
          backgroundColor: [
            'rgba(67,138,246,1)',
            'rgba(67,138,246,0.1)'
          ],
          hoverOffset: 4
        }]
      };
    return ( 
        <div className="ques__container">
            <div className="ques">
            <div className="ques__heading">
               <p>Question Analysis</p>
            </div>
            <div className="ques__score">{correctAnswers}/15</div>
            </div>
            <div className="ques__explanation">
                <p>You scored {correctAnswers} question correct out of 15. However it still needs some improvements</p>
            </div>
            <div className="ques__graph">
                    <Doughnut data={data} />
                    <div className="dart__logo">🎯</div>
            </div>
        </div>
     );
}
 
export default QuestionAnalysis;