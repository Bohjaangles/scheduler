import React from "react";
import DayListItem from "./DayListItem";

const DayList = function(props) {

  const listTheDays = props.days.map(jour =>
      <DayListItem
        key={jour.id}
        name={jour.name}
        spots={jour.spots}
        selected={jour.name === props.value}
        setDay={props.setDay}
      />  
  )
    
  

  return (
    <ul>
      {listTheDays}
    </ul>
  )
};

export default DayList;