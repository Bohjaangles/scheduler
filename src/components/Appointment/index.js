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
  let student = "";
  let interviewerObj = {};

  // list of possible modes that can be rendered in an appointment slot. 
  const EMPTY = "EMPTY";                  // empty appointment slot
  const SHOW = "SHOW";                    // a booked appointment slot with interviewer, student, and time all displayed
  const CREATE = "CREATE";                // form to enter in info to make new appointment
  const SAVING = "SAVING";                // brief "saving in progress" display 
  const DELETING = 'DELETING';            // brief "deleting in progress" display
  const CONFIRM = "CONFIRM";              // prompt to confirm the action taken(in deleting an appointment)
  const EDIT = "EDIT";                    // opens the form to book an appoinmtment with fields pre populated with previously entered in info
  const ERROR_SAVE = 'ERROR_SAVE';        // obvious display message indicated the save action was not completed due to error
  const ERROR_DELETE = 'ERROR_DELETE';    // obvious display message indicated the delete action was not completed due to error

  if (props.interview) {
    student = props.interview.student;
    interviewerObj = props.interview.interviewer;
  }
  const { mode, transition, back } = useVisualMode( // functions declared in hooks/useVisualMode to set and transition between the modes
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) { 
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview) // function declared in hooks/useApplicationData
      .then(() => transition(SHOW, true))
      .catch(() => transition(ERROR_SAVE, true));
  }

  const editForm = function() {
    transition(EDIT);
  };

  const callConfirmDelete = function() {
    transition(CONFIRM);
  };

  const deleteappt = function() {
    transition(DELETING, true);
    props.deleteInterview(props.id, props.interview) // function declared in hooks/useApplicationData
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };
  
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
      />}
      {mode === CONFIRM && <Confirm
        onCancel={back}
        onConfirm={deleteappt}
        message='Deleting appointment. Please confirm/cancel to go back'
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