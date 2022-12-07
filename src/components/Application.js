import React from "react";
import DayList from "./DayList";
import { useState, useEffect } from "react";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";



import "components/Application.scss";
import axios from "axios";
import useApplicationData from "hooks/useApplicationData";

/*

appointments from line 33: {id: 2
                     interview: {student: 'Archie Cohen', interviewer: 8}
                          time: "1pm"}

days from line 32: {id: 1, 
                  name: 'Monday', 
          appointments: Array(5), 
          interviewers: Array(5), 
                 spots: 3}

interviewer data from line 34: {id: 1, 
                              name: 'Sylvia Palmer', 
                            avatar: 'https://i.imgur.com/LpaY82x.png'}

getInterview data from line 54: {student: 'Archie Cohen',
                                  interviewer: {
                                    id: 2,
                                    name: 'Tori Malcolm',
                                    avatar: 'https://i.imgur.com/Nmx0Qxo.png'
                                  }
                                }
                            
*/

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    deleteInterview,
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const daysInterviewers = getInterviewersForDay(state, state.day);
    // console.log('dayInterviews: ',daysInterviewers)
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

// http://localhost:8001/api/debug/reset for api server reset
