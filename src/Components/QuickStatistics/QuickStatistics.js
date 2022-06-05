import "./QuickStatistics.css";
const QuickStatistics = ({correctAnswers,rank,percentile}) => {
    return (  
        <div className="qs__container">
            <div className="qs__heading">
                Quick Statistics
            </div>
            <div className="qs__stats">
                <div className="qs__rank">
                    <div className="qs__trophy">🏆</div>
                    <div className="qs__rankdetails">
                        <div className="qs__rankamount">
                            <p>{rank}</p>
                        </div>
                       <div className="qs__yourrank">
                         <p>YOUR RANK</p>
                       </div>
                    </div>
                </div>
                <div className="qs__divider1"></div>
                <div className="qs__percentile">
                    <div className="qs__notepad">📝</div>
                        <div className="qs__percentiledetails">
                            <div className="qs__percentileamount">
                                <p>{percentile}</p>
                            </div>
                        <div className="qs__percentiletxt">
                            <p>PERCENTILE</p>
                        </div>
                </div>
                <div className="qs__divider2"></div>
                <div className="qs__ca">
                <div className="qs__tick">✅</div>
                        <div className="qs__cadetails">
                            <div className="qs__caamount">
                                <p>{correctAnswers}/15</p>
                            </div>
                        <div className="qs__catxt">
                            <p>CORRECT ANSWERS</p>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default QuickStatistics;