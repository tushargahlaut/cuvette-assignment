import "./SyllabusWiseAnalysis.css"

const SyllabusWiseAnalysis = () => {
    return ( 
        <div className="container">
            <div className="syllabus__heading">
                <p>Syllabus Wise Analysis</p>
            </div>
            <div className="option1">
                <p>HTML Tools,Form,History</p>
                <div className="progress1">
                <div className="progressBar1__outer">
                    <div className="progressBar1__filled"></div>
                </div>
                <div className="option1__progress">80%</div>
                </div>
            </div>
            <div className="option2">
                <p>Tags & References in HTML</p>
                <div className="progress2">
                <div className="progressBar2__outer">
                    <div className="progressBar2__filled"></div>
                </div>
                <div className="option2__progress">60%</div>
                </div>
            </div>
            <div className="option3">
                <p>Tables & CSS Basics</p>
                <div className="progress3">
                <div className="progressBar3__outer">
                    <div className="progressBar3__filled"></div>
                </div>
                <div className="option3__progress">24%</div>
                </div>
            </div>
            <div className="option4">
                <p>Tables & CSS Basics</p>
                <div className="progress4">
                <div className="progressBar4__outer">
                    <div className="progressBar4__filled"></div>
                </div>
                <div className="option4__progress">96%</div>
                </div>
            </div>
           
        </div>
     );
}
 
export default SyllabusWiseAnalysis;