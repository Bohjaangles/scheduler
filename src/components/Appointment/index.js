import React from "react";
import "components/Appointment/index.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import { getInterviewersForDay } from "helpers/selectors";


const Appointment = function(props) {
  console.log('appointments props: ', props);
  let student = '';
  let interviewerObj = {};

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  if (props.interview) {
    student = props.interview.student;
    interviewerObj = props.interview.interviewer;
  }
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview);
    transition(SHOW);
  }

  return (
    <article className="appointment" >
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => { transition(CREATE); }} />}
      {mode === SHOW && (
        <Show
          student={student}
          interviewer={interviewerObj}
        />
      )}
      {mode === CREATE && <Form
        onSave={save}
        interviewers={props.interviewers}
        onCancel={back}
      />}
    </article>
  );
};

export default Appointment;



/* 
if fucky, make props list 
props:{
       id: 2
interview: {student: 'Archie Cohen', interviewer: undefined} 
     time: "1pm"
      }
*/