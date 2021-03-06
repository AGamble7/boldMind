import React, { useState } from "react";
import { affirmations } from "../data/Affirmations";
import { Link } from "react-router-dom";
import "./MainFrame.css";
import logo from "../images/bold.png";



const MainFrame = (props) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const _handleQuestion = (question) => {
        setQuestion(question);
    };

    const _handleSubmit = (e) => {
        const answer = affirmations[getRandomIntInclusive(0,46)]
        setAnswer(answer);
        setQuestion("");
    }


     function getRandomIntInclusive(min, max) {
         min= Math.ceil(min);
         max= Math.floor(max)
         return Math.floor(Math.random() * (max - min) + min);
     }
    return ( 
        <div className="MainFrame">
        
       
       <Link class="waves-effect waves-light btn orange accent-1  grey-text text-darken-4" to="/journal">Journal</Link>
    <div class="rowFront">
    <div class="col s12 m6">
      <div class="card c blue darken-2">
        <div class="card-content white-text">
        <form>
            <p className="para1">
                Welcome to BoldMind! On this app you are able to express yourself and become re-grounded. Express how you feel in the input box below..
            </p>
        <input type="text" value={question} onChange={(e) => _handleQuestion(e.target.value)}/>
        </form>
        <a class="waves-effect waves btn-flat" onClick={(e) => _handleSubmit(e)}> Click to get re-grounded</a> 
      </div>
    </div>
  </div>
  <div className="About">
  {/* <p className="para2">
      Hi! My name is Aliyah Gamble and I created this site to help bring awreness to imposter syndrome and how to take a pause either at the beginning, middle, or end of your day to relfect and become regrounded. Browse the Journal Page to start your journey! ✨
  </p> */}
  </div>
  <p>
    {!!answer ? (<p>{answer}</p>) : null}
    </p>
 </div>
 </div>
    )

}





export default MainFrame;