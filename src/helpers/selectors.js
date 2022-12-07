

export function getAppointmentsForDay(state, day) {
  let appointments = []
  let dayObj = {};
  
  state.days.forEach(jour => {
    if (jour.name === day) {
      dayObj = jour
    }
  })
  if (Object.keys(dayObj).length === 0) return [];
   let appointmentsArr = Object.values(state.appointments)  
  //  console.log('AR: ', appointmentsArr);   
    appointmentsArr.forEach(app => {
      dayObj.appointments.forEach(dayApp => {
        // console.log('dayApp: ', dayApp);
        if (app.id === dayApp) {
          appointments.push(app);
        }
      })
    })
    if (dayObj.name && appointments.length > 0) {
      // console.log('appontments: ', appointments);
      return appointments;
    }
    return [];
}

/* 
appointments:  [
        { id: 1, time: '12pm', interview: null },
        { id: 2, time: '1pm', interview: null },
        {
          id: 3,
          time: '2pm',
          interview: { student: 'Archie Cohen', interviewer: 2 }
        }
      ]

*/

export function getInterview(state, appInterview) {
  let returnObj = {}
  // console.log('gI state: ', state);
  // console.log('GI appintervew: ', appInterview);
  if (appInterview && appInterview.interviewer) {
    const intId = appInterview.interviewer.toString();
    returnObj = {...appInterview, interviewer: state.interviewers[intId]}
    // console.log(returnObj);
    return returnObj;
  }

  return null;
};

export function getInterviewersForDay(state, day) {
  let interviewers = []
  let dayObj = {};
  // console.log('state in getinterveriwers', state);
  state.days.forEach(jour => {
    if (jour.name === day) {
      dayObj = jour
    }
  })

  // console.log('dayobj', dayObj)
  if (Object.keys(dayObj).length === 0) return [];
  if (Object.keys(state.interviewers).length === 0) return [];   
  dayObj.interviewers.forEach(dayinterviewer => {
    let stringedId = dayinterviewer.toString()
    interviewers.push(state.interviewers[stringedId])
  })
   
  if (dayObj.name && interviewers.length > 0) {
    // console.log('intervioers: ', interviewers);
    return interviewers;
  }
  return [];
}


/*
export function getInterviewersForDay(state, day) {
  let interviewers = []
  let dayObj = {};
  
  state.days.forEach(jour => {
    if (jour.name === day) {
      dayObj = jour
    }
  })
  if (Object.keys(dayObj).length === 0) return [];
   let appointmentsArr = Object.values(state.appointments)  
  //  console.log('AR: ', appointmentsArr);   
    appointmentsArr.forEach(app => {
      dayObj.appointments.forEach(dayApp => {
        // console.log('dayApp: ', dayApp);
        if (app.id === dayApp) {
          appointments.push(app);
        }
      })
    })
    if (dayObj.name && appointments.length > 0) {
      return appointments;
    }
    return [];
}

*/ 