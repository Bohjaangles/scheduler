

export function getAppointmentsForDay(state, day) {
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
  return [];
}

export function getInterview(state, appInterview) {
  let returnObj = {};
  if (appInterview && appInterview.interviewer) {
    const intId = appInterview.interviewer.toString();
    returnObj = { ...appInterview, interviewer: state.interviewers[intId] };
    return returnObj;
  }
  return null;
};

export function getInterviewersForDay(state, day) {
  let interviewers = [];
  let dayObj = {};
  state.days.forEach(jour => {
    if (jour.name === day) {
      dayObj = jour;
    }
  });
  if (Object.keys(dayObj).length === 0) return [];
  if (Object.keys(state.interviewers).length === 0) return [];

  dayObj.interviewers.forEach(dayinterviewer => {
    let stringedId = dayinterviewer.toString();
    interviewers.push(state.interviewers[stringedId]);
  });

  if (dayObj.name && interviewers.length > 0) {
    return interviewers;
  }
  return [];
}