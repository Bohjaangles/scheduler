import React from "react";
import DayList from "./DayList";
import { useState, useEffect } from "react";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import useVisualMode from "hooks/useVisualMode";


import "components/Application.scss";
import axios from "axios";

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
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),  
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])
  const appointments = getAppointmentsForDay(state, state.day);
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
  
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
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
            day={state.day}
            setDay={setDay}
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
