# Interview Scheduler

  Application to manage the scheduling of interviews in a school setting. Students can schedule interviews at different times throughout the week and select the person they would like the interview with from available options. Editing existing appointments and cancellations included!

  Mini project made for educational purposes by me, Russel!
  
  Key learning outcomes:
  - Become familiar with React
    - familiarizing with using useState, useEffect
    - familiarizing with using props, prop drilling, components, etc.
    - deepen understanding of difference/similarities of JSX and HTML
  - Implement integration and end to end testing with 95%+ coverage
    testing frameworks used:
      - story book
      - jest
      - cypress
  - opportunity to learn and use axios
  - continue refining use of JS and related logic


## Setup

Fork and clone this repo.
Install dependencies with `npm install`.
For the API used for shceduler app: [scheduler api](https://github.com/Bohjaangles/scheduler-api)

## Dependencies
 - axios
 - classnames
 - normalize.css
 - react
 - react-dom
 - react-scripts
## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Screenshots of app in use:


## Highlighting testing coverage report
!['Highlighting testing coverage report'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/testing-coverage-report.png)

## Default view when app is opened
!['Default view when app is opened'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/Monday-with-appts.png)

## Switched from Monday to Friday and there is an empty appointment slot
!['Switched from Monday to Friday and there is an empty appointment slot'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/empty-spot-for-appt.png)

## Selected that empty spot and entering in the input fields
!['Selected that empty spot and entering in the input fields'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/new-appointment-creation.png)

## Error handling for appointment creation, if users tries to submit without entering in a name
!['Error handling for appointment creation, if users tries to submit without entering in a name'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/useful-error-1.png)

## Error handling for appointment creation, if users tries to submit without selecting an interviewer
!['Error handling for appointment creation, if users tries to submit without selecting an interviewer'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/useful-error-2.png)

## Completed appointment posted
!['Completed appointment posted'](https://github.com/Bohjaangles/scheduler/blob/master/public/images/new-appt-completed.png)
