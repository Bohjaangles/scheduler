import {useState, useEffect} from 'react'
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => {console.log('setDay called'); setState({ ...state, day })};

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

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = calculateSpots(state, appointments)
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => setState(prev => ({ ...prev, appointments, days})))
  }

  function calculateSpots(state, changedAppointment) {
    const dayIndex = state.days.findIndex(day => day.name === state.day)
    const daysAppointmentsId = state.days[dayIndex].appointments
    const changedAppsDay = daysAppointmentsId.filter(id => !changedAppointment[id].interview)
    console.log('should just be a days of appts:', changedAppsDay)
    const spots = changedAppsDay.length;
    const updatedDay = {...state.days[dayIndex], spots: spots } 
    // const updatedDays = [...state.days, {id: dayIndex, name: dayName, spots: spots}]
    const updatedDays = [...state.days]
    updatedDays.splice(dayIndex, 1, updatedDay)
    console.log('calc days- days array: ', updatedDay, updatedDays)
    return updatedDays;
  }

  const deleteInterview = function(id) {
    // console.log('deleteID: ', id)
    // console.log('delete appointment:', state.appointments[id]);
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    const days = calculateSpots(state, appointments)
    return axios.delete(`/api/appointments/${id}`, appointment)
    .then(() => setState(prev => ({...prev, appointments, days })))
  }

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview,
  }
};