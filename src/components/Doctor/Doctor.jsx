import React, { useState } from "react";
import classes from "./Doctor.module.css";
import { MessageBox, MessageList, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Link } from "react-router-dom";
import { Button as Btn } from "@mui/material";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { useEffect, useRef } from "react";
import { patientChatApi } from "../../api/patientChat";

const dates = require("../../openTime.json");

const theme = createTheme({
  palette: {
    secondary: {
      main: "#E33E7F",
    },
  },
});

export function Doctor() {
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const [selectedDates, addSelectedDate] = useState([]);
 

  const sendMessage = async () => {
    
    setMessage("");
    const response = await patientChatApi.postMessage({
      content: ref.current.value,
    });

    setConversation((prev) => ({
      ...prev,
      messages: [...prev.messages, response],
    }));
    ref.current.value = "";
  };

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

  const [conversation, setConversation] = useState({
    employeeName: "",
    messages: [],
  });

  useEffect(() => {
    patientChatApi.getConversation().then(setConversation);
    const interval = setInterval(() => {
      patientChatApi.getConversation().then(setConversation);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Ваш доктор: {conversation.employeeName}</h2>
      {/* <div className={classes.dateWrapper}>
        {dates.map((date) => {
          const [day, time] = date.split("'T'");

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
      </div> */}
      {/* <Btn variant="outlined" theme={theme}>
        Записаться
      </Btn> */}
      {/* <MessageBox
        position={"left"}
        type={"text"}
        title={"Message Box Title"}
        text="Here is a text type message box"
      /> */}
      <div className={classes.chatWrapper}>
        <MessageList
           className={classes.messageList}
         
          dataSource={
            conversation.messages.map(({ content, fromName, time }) => ({
              position:
                fromName === conversation.employeeName ? "right" : "left",
              type: "text",
              text: content,
              date: new Date(time.replaceAll("'", "").slice(0, -1)),
              title: fromName,
            }))
            //   [
            //   {
            //     position: "left",
            //     type: "text",
            //     title: "Kursat",
            //     text: "Give me a message list example !",
            //   },
            //   {
            //     position: "right",
            //     type: "text",
            //     title: "Emre",
            //     text: "That's all.",
            //   },
            // ]
          }
        />
        <div className={classes.chatFooter}>
          <Input
            referance={ref}
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Button text={"Send"} onClick={sendMessage} title="Send" />
            }
          />
        </div>
      </div>
      <Btn variant="outlined">
        <Link to="/videocall">Call to doctor</Link>
      </Btn>
    </div>
  );
}
