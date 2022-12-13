import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import classes from "./Doctor.module.css";
import { MessageBox } from "react-chat-elements"




const dates = require("../../openTime.json");

export function Doctor() {
  const [value, onChange] = useState(new Date());
  const doctorName = "Ivan";
  const doctorSurname = "Kondrashov";
  const [selectedDates, addSelectedDate] = useState([]);
  console.log(selectedDates);
  const selectDateHandler = (date) => {
    console.log(date);
    selectedDates.includes(date)
      ? selectedDates.splice(selectedDates.indexOf(date), 1)
      : selectedDates.push(date);
    // selectedDates.includes(date) ?addSelectedDate(...selectedDates, selectedDates.splice(selectedDates.indexOf(date), 1)) : addSelectedDate(...) selectedDates.push(date);
    console.log(selectedDates);
    addSelectedDate(selectedDates);
  };

  return (
    <div>
      <h2>
        Ваш доктор: {doctorName} {doctorSurname}
      </h2>
      <div className={classes.dateWrapper}>
        {dates.map((date) => {
          const [day, time] = date.split("'T'");
          if (selectedDates.includes(date))
            return (
              <div
                key={date}
                className={classes.selectedItem}
                onClick={() => selectDateHandler(date)}
              >
                {day} - {time}
              </div>
            );
            return(
                <div
                key={date}
                className={classes.datetimeCont}
                onClick={() => selectDateHandler(date)}
              >
                {day} - {time}
              </div>
            )
          {/* return (
            <div
              key={date}
              className={
                selectedDates.includes(date) ? "selectedItem" : "datetimeCont"
              }
              onClick={() => selectDateHandler(date)}
            >
              {day} - {time}
            </div>
          ); */}
        })}
      </div>
      <button>Записаться</button>
    </div>
  );
}
