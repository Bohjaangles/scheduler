import React from "react";
import "components/Appointment/index.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";


const Appointment = function(props) {
  // console.log('(index)appointments props: ', props);
  let student = "";
  let interviewerObj = {};

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = 'DELETING';
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';

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
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW, true))
      .catch(() => transition(ERROR_SAVE, true))
  }
  
  const editForm = function() {
    transition(EDIT);
  }

  const callConfirmDelete = function() {
    transition(CONFIRM)
  }

  const deleteappt = function() {
    transition(DELETING, true);
    props.deleteInterview(props.id, props.interview)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true))
  }

  return (
    <article className="appointment" data-testid="appointment" >
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => { transition(CREATE); }} />}
      {mode === SHOW && (
        <Show
          student={student}
          interviewer={interviewerObj}
          onDelete={callConfirmDelete}
          onEdit={editForm}
        />
      )}
      {mode === EDIT && <Form
        interviewers={props.interviewers}
        interviewer={interviewerObj.id}
        student={student}
        onSave={save}
        onCancel={back}
        // onCandel={() => transition(SHOW)}
      />}
      {mode === CONFIRM && <Confirm
        onCancel={back}
        onConfirm={deleteappt}
      />}
      {mode === ERROR_SAVE && <Error
        message='There was an error in saving appointment, appointment not saved'
        onClose={back}
      />}
      {mode === ERROR_DELETE && <Error 
        message="there was an error in deleting appointment, appointment not deleted"
        onClose={back}
      />}
      {mode === SAVING && <Status
        message="Saving appointment"
      />}
      {mode === DELETING && <Status
        message='Deleting appointment'
      />}
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