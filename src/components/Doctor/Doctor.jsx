import React, { useState } from "react";
import classes from "./Doctor.module.css";
import { MessageBox, MessageList, Input, Button } from "react-chat-elements"
import "react-chat-elements/dist/main.css"
import { MessageBox, MessageList, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";




const dates = require("../../openTime.json");

export function Doctor() {
  const [value, onChange] = useState(new Date());
  const doctorName = "Ivan";
  const doctorSurname = "Kondrashov";
  const [messages, addMessages] = useState([]);
  const [selectedDates, addSelectedDate] = useState([]);
  console.log(selectedDates);
  const selectDateHandler = (date) => {
    console.log(typeof date);
    console.log(selectedDates.includes(date));
    const newSelectedDates = selectedDates.includes(date)
      ? selectedDates.filter((x) => x !== date)
      : [...selectedDates, date];
    // selectedDates.includes(date)
    //   ? selectedDates.splice(selectedDates.indexOf(date), 1)
    //   : selectedDates.push(date);
    // selectedDates.includes(date) ?addSelectedDate(...selectedDates, selectedDates.splice(selectedDates.indexOf(date), 1)) : addSelectedDate(...) selectedDates.push(date);
    console.log(selectedDates);
    addSelectedDate(newSelectedDates);
  };

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
                classes[
                  selectedDates.includes(date) ? `selectedItem` : `datetimeCont`
                ]
              }
              onClick={() => selectDateHandler(date)}
            >
              {day} - {time}
            </div>
          );
        })}
      </div>
      <button>Записаться</button>
      {/* <MessageBox
        position={"left"}
        type={"text"}
        title={"Message Box Title"}
        text="Here is a text type message box"
      /> */}
      <div className={classes.chatWrapper}>
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={[
            {
              position: "left",
              type: "text",
              title: "Kursat",
              text: "Give me a message list example !",
            },
            {
              position: "right",
              type: "text",
              title: "Emre",
              text: "That's all.",
            },
          ]}
        />
        <div className={classes.chatFooter}>
          <Input
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Button
                text={"Send"}
                onClick={() => alert("Sending...")}
                title="Send"
              />
            }
          />
        </div>
      </div>
      <button>
        <Link to="/videocall">Call to doctor</Link>{" "}
      </button>
    </div>
  );
}
