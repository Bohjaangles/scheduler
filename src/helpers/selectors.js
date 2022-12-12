

export function getAppointmentsForDay(state, day) { // returns an array of objects containing the appointments(object) for the given day
  let appointments = [];
  let dayObj = {};

  state.days.forEach(jour => {
    if (jour.name === day) {
      dayObj = jour;
    }
  });
  if (Object.keys(dayObj).length === 0) return []; 
  let appointmentsArr = Object.values(state.appointments);
  appointmentsArr.forEach(app => {
    dayObj.appointments.forEach(dayApp => {
      if (app.id === dayApp) {
        appointments.push(app);
      }
    });
  });
  if (dayObj.name && appointments.length > 0) {
    return appointments;
  }
  return []; // returns an empty array if there are no appointments for given day 
}

export function getInterview(state, appInterview) { // returns an object containing the interview info(student(string), interviewer(object)) from an appointment
  let returnObj = {};
  if (appInterview && appInterview.interviewer) {
    const intId = appInterview.interviewer.toString(); // To string to match the state.interviewers key data type
    returnObj = { ...appInterview, interviewer: state.interviewers[intId] };
    return returnObj;
  }
  return null;
};

export function getInterviewersForDay(state, day) { // Returns an array of objects, where each object is an interviewer, for a given day
  let interviewers = [];
  let dayObj = {};
  state.days.forEach(jour => { // isolate the day object matching the given day param
    if (jour.name === day) {
      dayObj = jour;
    }
  });
  if (Object.keys(dayObj).length === 0) return [];
  if (Object.keys(state.interviewers).length === 0) return [];

  dayObj.interviewers.forEach(dayinterviewer => { // day object has an array of interviewer ids, and this is to push the interviewer object matching that id into the return array
    let stringedId = dayinterviewer.toString();
    interviewers.push(state.interviewers[stringedId]);
  });

  if (dayObj.name && interviewers.length > 0) {
    return interviewers;
  }
  return [];
}