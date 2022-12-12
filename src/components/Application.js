import React from "react";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import "components/Application.scss";
import useApplicationData from "hooks/useApplicationData";


export default function Application(props) {
  const {
    state, // state here includes: day(string), days(array), appointments(object), and interviewers(object)  
    setDay,
    bookInterview,  // Renders booked appointment after the form has been submitted
    deleteInterview,  // Deletes an appointment that was previously booked and will then display an empty slot
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day);

  const schedule = appointments.map((appointment) => { // this function renders the appointments for the day, including booked and empty slots
    const interview = getInterview(state, appointment.interview); 
    const daysInterviewers = getInterviewersForDay(state, state.day); // to list the available interviewers for form data when user is making a booking

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={daysInterviewers}
        bookInterview={bookInterview}
        deleteInterview={deleteInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            setDay={setDay}
            value={state.day}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key='last' time="5pm">
        </Appointment>
      </section>
    </main>
  );
}