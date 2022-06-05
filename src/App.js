import TopNavbar from './Components/TopNavbar/TopNavbar';
import Sidebar from "./Components/SideBar/Sidebar";
import './App.css';
import SyllabusWiseAnalysis from './Components/SyllabusWiseAnalysis/SyllabusWiseAnalysis';
import QuestionAnalysis from './Components/QuestionAnalysis/QuestionAnalysis';
import ComparisonGraph from './Components/ComparisonGraph/ComparisoGraph';
import QuickStatistics from './Components/QuickStatistics/QuickStatistics';
import SkillTest from './Components/SkillTest/SkillTest';
import Header from './Components/Header/Header';
import { useState } from 'react';


function App() {
  const [percentile,setPercentile] = useState(37);
  const [correctAnswers,setCorrectAnswers] = useState(7);
  const [rank,setRank]=useState(12890);
  return (
    <div className="App">
      <TopNavbar/>
      <Sidebar/>
      <Header/>
      <SyllabusWiseAnalysis/>
      <QuestionAnalysis setCorrectAnswers={setCorrectAnswers} correctAnswers={correctAnswers}/>
      <SkillTest correctAnswers={correctAnswers} percentile={percentile} rank={rank} setCorrectAnswers={setCorrectAnswers} setPercentile={setPercentile} setRank={setRank}/>
      <QuickStatistics correctAnswers={correctAnswers} percentile={percentile} rank={rank}/>
      <ComparisonGraph percentile={percentile}/>
    </div>
  );
}

export default App;
