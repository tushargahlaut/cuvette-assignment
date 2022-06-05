
import "./SkillTest.css"
import html5logo from "../../Assets/html5.png";
import { useState } from "react";
import ReactModal from "react-modal";
const SkillTest = ({rank,setRank,percentile,setPercentile,correctAnswers,setCorrectAnswers}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return ( 
        <div className="st__container">
            <div className="st__innercontainer">
            <div className="st__quizstats">
                <div className="st__logo">
                    <img height="50px" width="50px" src={html5logo} alt="" />
                </div>
                <div className="st__quizdetails">
                    <div className="st__heading">
                        <p>Hypertext Markup Language</p>
                    </div>
                    <div className="st__details">
                    <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                    </div>
                </div>
            <div className="st__button">
               <button onClick={handleShow} className="st__innerbutton">
                   <p className="st__ibtext">
                       Update
                   </p>
               </button>
               <ReactModal style={{overlay:{backgroundColor:"rgba(0,0,0,0.7)"}}} className="st__modal" isOpen={show}>
                   <div className="modal__header">
                            <div className="modal__heading">
                             Update Scores
                            </div>
                            <div className="modal__logo">
                                <img width="48.56px" height="47.45px" src={html5logo} alt="html5" />
                            </div>
                   </div>
                   <div className="modal__divider1"></div>
                   <div className="modal__content">
                            <div className="modal__option1">
                                <div className="option1__text">
                                    <div className="option1__1">1</div>
                                    <div className="option1__txt">Update your <strong>rank</strong></div>
                                </div>
                                <div className="option1i__container" >
                                    <input value={rank} onChange={(e)=>setRank(e.target.value)} className="option1__input" type="text" />
                                </div>
                            </div>
                            <div className="modal__option2">
                                <div className="option2__text">
                                    <div className="option2__2">2</div>
                                    <div className="option2__txt">Update your <strong>percentile</strong></div>
                                </div>
                                <div className="option2i__container" >
                                    <input value={percentile} onChange={(e)=>setPercentile(e.target.value)} className="option2__input" type="text" />
                                </div>
                            </div>

                            <div className="modal__option3">
                                <div className="option3__text">
                                    <div className="option3__3">3</div>
                                    <div className="option3__txt">Update your <strong>current score (out of 15)</strong></div>
                                </div>
                                <div className="option3i__container" >
                                    <input value={correctAnswers} onChange={(e)=>setCorrectAnswers(e.target.value)} className="option3__input" type="text" />
                                </div>
                            </div>
                   </div>
                   <div className="modal__divider2"></div>
                   <div className="modal__footer">
                       <div className="modal__buttons">
                                <button className="cancel__button" onClick={handleClose}>
                                    <p className="cancel__text">Cancel</p>
                                </button>
                                <button className="save__button" onClick={handleClose}>
                                    <p className="save__text">Save</p>
                                    <div className="rightarrow__icon">
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33325 8.28415H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8 3.61751L12.6667 8.28417L8 12.9508" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>

                                    </div>
                                </button>
                       </div>
                        
                   </div>
                   
               </ReactModal>
            </div>
            </div>
           </div>
          
        </div>
     );
}
 
export default SkillTest;