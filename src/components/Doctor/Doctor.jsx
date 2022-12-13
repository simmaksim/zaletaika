import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { GiftedChat } from 'react-gifted-chat';
import classes from "./Doctor.module.css";
import { useEffect } from "react";


const dates = require("../../openTime.json");

export function Doctor() {
  const [value, onChange] = useState(new Date());
  const doctorName = "Ivan";
  const doctorSurname = "Kondrashov";
  const [messages, addMessages] = useState([])
  const [selectedDates, addSelectedDate] = useState([]);
  console.log(selectedDates);
  const selectDateHandler = (date) => {
    console.log(typeof date);
    console.log(selectedDates.includes(date))
    const newSelectedDates = selectedDates.includes(date) ? selectedDates.filter(x => x !== date) : [...selectedDates, date]
    // selectedDates.includes(date)
    //   ? selectedDates.splice(selectedDates.indexOf(date), 1)
    //   : selectedDates.push(date);
    // selectedDates.includes(date) ?addSelectedDate(...selectedDates, selectedDates.splice(selectedDates.indexOf(date), 1)) : addSelectedDate(...) selectedDates.push(date);
    console.log(selectedDates);
    addSelectedDate(newSelectedDates);
  };
  useEffect(()=>{
    addMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
    ])
  },[])

  const onSend=(messages = [])=> {
    addMessages((previousState) => 
       GiftedChat.append(previousState, messages)
    )};

  return (
    <div>
      <h2>
        Ваш доктор: {doctorName} {doctorSurname}
      </h2>
      <div className={classes.dateWrapper}>
        {dates.map((date) => {
          const [day, time] = date.split("'T'");
           //if (selectedDates.includes(date))
            //  return (
            //    <div
            //      key={date}
            //      className={classes.selectedItem}
            //      onClick={() => selectDateHandler(date)}
            //    >
            //      {day} - {time}
            //    </div>
            //  );
            //  return(
            //      <div
            //      key={date}
            //      className={classes.datetimeCont}
            //      onClick={() => selectDateHandler(date)}
            //    >
            //      {day} - {time}
            //    </div>
            //  )
           return (
            <div
              key={date}
              className={                
                classes[selectedDates.includes(date) ? `selectedItem` : `datetimeCont`]
              }
              onClick={() => selectDateHandler(date)}
            >
              {day} - {time}
            </div>
          ); 
        })}
      </div>
      <button>Записаться</button>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
    </div>
  );
}
