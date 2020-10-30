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
        
        
     <a class="waves-effect waves-light btn orange accent-1  grey-text text-darken-4"> <Link to="/journal"> Journal </Link> </a>
     <div className="logo">
       <img src={logo} />
       </div>
    <div class="row">
    <div class="col s12 m6">
      <div class="card c blue darken-2">
        <div class="card-content white-text">
        <form>
        <input type="text" value={question} onChange={(e) => _handleQuestion(e.target.value)}/>
        </form>
        <a class="waves-effect waves btn-flat" onClick={(e) => _handleSubmit(e)}> Click to get re-grounded</a> 
      </div>
    </div>
  </div>
  <p>
    {!!answer ? (<p>{answer}</p>) : null}
    </p>
 </div>
 </div>
    )

}





export default MainFrame;