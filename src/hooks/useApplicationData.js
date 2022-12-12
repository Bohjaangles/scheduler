import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([ // Loads the information used to populate the schedule
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ])
      .then((all) => {
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      });
  }, []);

  function bookInterview(id, interview) { // Is triggered when the form is submitted(saved)
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = calculateSpots(state, appointments); // changes the spots avail for the day since one was just booked/claimed
    return axios.put(`/api/appointments/${id}`, { interview }) // update the api
      .then(() => setState(prev => ({ ...prev, appointments, days }))); // update state
  }

  function calculateSpots(state, changedAppointment) { // Function update the available spots for a day when appointments are booked/deleted
    const dayIndex = state.days.findIndex(day => day.name === state.day); // select the correct day we want to udpdate
    const daysAppointmentsId = state.days[dayIndex].appointments; // pull all the appointments for selected day

    const changedAppsDay = daysAppointmentsId.filter(id => !changedAppointment[id].interview); // Selects for empty appointment slots with updated info from param
    const spots = changedAppsDay.length; // for the amount we are going to update ie. how many spots are available now

    const updatedDay = { ...state.days[dayIndex], spots: spots };
    const updatedDays = [...state.days];
    updatedDays.splice(dayIndex, 1, updatedDay);

    return updatedDays; // for updating the state in the function this is called within
  }

  const deleteInterview = function(id) { // is triggered when user confirms appoitment delete action
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = calculateSpots(state, appointments);
    return axios.delete(`/api/appointments/${id}`, appointment) // update the api
      .then(() => setState(prev => ({ ...prev, appointments, days }))); // update state
  };

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview,
  };
};