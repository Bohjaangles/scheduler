import React from "react";
import "components/Appointment/index.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";


const Appointment = function(props) {
  console.log('appointments props: ', props);
  let student = ''
  let interviewerObj = {};
  if (props.interview) {
    student = props.interview.student;
    interviewerObj = props.interview.interviewer;
  }
  
  return (
    <article className="appointment" >
      <Header time={props.time} />
      {props.interview ? <Show interview={{student, interviewerObj}}/> : <Empty />}
    </article>
  )
}

export default Appointment;



/* 
if fucky, make props list 
props:

*/