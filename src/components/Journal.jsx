import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import M from "materialize-css";
import "./JournalPage.css";


const Journal = (props) => {
const [ question1, setQuestion1 ] = useState("");
const [ question2, setQuestion2 ] = useState("");
const [ question3, setQuestion3 ] = useState("");
const [ question4, setQuestion4 ] = useState("");

const _handleChangeQuestion1 = (question) => {
    setQuestion1(question);
 }
 const _handleChangeQuestion2 = (question) => {
    setQuestion2(question);
 }
 const _handleChangeQuestion3 = (question) => {
    setQuestion3(question);
 }
 const _handleChangeQuestion4 = (question) => {
    setQuestion4(question);
 }

 const _resetQuestion1 = (e) => {
    e.preventDefault()
    setQuestion1('');
 }
 const _resetQuestion2 = (e) => {
    e.preventDefault()
    setQuestion1('');
 }
 const _resetQuestion3 = (e) => {
    e.preventDefault()
    setQuestion1('');
 }
 const _resetQuestion4 = (e) => {
    e.preventDefault()
    setQuestion1('');
 }
 
 const _handleToast1 = (e) => {
    M.toast({html: 'Do those task that you are passinaite about! Maybe even try something new!'});
 }
 const _handleToast2 = (e) => {
    M.toast({html: 'If it helps you get out of your head, than go do it! Take some time for yourself, you deserve it!'});
 }
 const _handleToast3 = (e) => {
    M.toast({html: 'Make a goal for today or this week that you treat yourself! You deserve it!'});
 }
 const _handleToast4 = (e) => {
    M.toast({html: 'Put your phone done, close your computer, and step away from the zoom chat. Try to be adventurous; outside'});
 }

    return(
        <>
        <a class="waves-effect waves-light btn orange accent-1 grey-text text-darken-4"> <Link to="/"> Home </Link></a>
       <div class="row">
    <div class="col s12 m6">
      <div class="card blue darken-4">  
        <div class="card-content white-text">
          <span class="card-title"> List everyhting you feel passionate about</span>
          <form>
        <input type="text" value={question1} onChange={(e) => _handleChangeQuestion1(e.target.value)}/>
        </form>
        </div>
        <div class="card-action">
            
        <a onClick={ _handleToast1 } class="waves-effect waves btn-flat"> Key take away</a>
        <br />
        <a class="waves-effect waves btn-flat" onClick={(e) => _resetQuestion1(e) }>Submit your response</a>  
        </div>
      </div>
    </div>
  </div>
        {/* <form>
        <input type="text" value={Journal} onChange={(e) => _handleJournal(e.target.value)}/>
        </form>
        <button type="button" onClick={(e) => _handleSubmit(e)}>Click to start your Mindfullness</button> */}


<div class="row">
    <div class="col s12 m6">
      <div class="card blue darken-3">
        <div class="card-content white-text">
          <span class="card-title"> List the things that get you out of your head</span>
          <form>
        <input type="text" value={question2} onChange={(e) => _handleChangeQuestion2(e.target.value)}/>
        </form>
        </div>
        <div class="card-action">
            
        <a onClick={ _handleToast2 } class="waves-effect waves btn-flat">Key Take Away</a>
        <br />
        <a class="waves-effect waves btn-flat" onClick={(e) => _resetQuestion2(e)}>Submit your response</a> 
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12 m6">
      <div class="card blue darken-2">
        <div class="card-content white-text">
          <span class="card-title"> List everything that you think of as a treat for yourself </span>
          <form>
        <input type="text" value={question3} onChange={(e) => _handleChangeQuestion3(e.target.value)}/>
        </form>
        </div>
        <div class="card-action">
            
        <a class="waves-effect waves btn-flat" onClick={ _handleToast3 } >Key Take Away</a>
        <br/> 
        <a class="waves-effect waves btn-flat" onClick={(e) => _resetQuestion3(e)}>Submit your response</a> 
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12 m6">
      <div class="card blue">
        <div class="card-content white-text">
          <span class="card-title"> List the things you like to do that don't involve technology</span>
          <form>
        <input type="text" value={question4} onChange={(e) => _handleChangeQuestion4(e.target.value)}/>
        </form>
        </div>
        <div class="card-action">
            
        <a class="waves-effect waves btn-flat" onClick={ _handleToast4 } >Key Take Away</a>
        <br />
        <a class="waves-effect waves btn-flat" onClick={(e) => _resetQuestion4(e)}>Submit your response</a> 
        </div>
      </div>
    </div>
  </div>


        </>
    )
}


export default Journal;