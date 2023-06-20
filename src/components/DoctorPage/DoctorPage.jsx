import React, { useState, useRef } from "react";
import classes from "./DoctorPage.module.css";
import {
  MessageBox,
  MessageList,
  Input,
  Button,
  ChatList,
} from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Link } from "react-router-dom";
import { Button as Btn } from "@mui/material";
import { useEffect } from "react";
import { doctorChatApi } from "../../api/doctorChat";

const dates = require("../../openTime.json");

const messagesFirst = [
  {
    position:"left",
    type:"text",
    title:"Kursat",
    text:"Give me a message list example !",
  },
  {
    position:"right",
    type:"text",
    title:"You",
    text:"That's all.",
  },
  ]

export function DoctorPage() {
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState([]);
  const [selectedDates, addSelectedDate] = useState([]);
  const [conversationItem, setConversationItem] = useState({
    employeeName: "",
    messages: [],
  });
  const [conversation, setConversation] = useState([]);
  const [messages, setMessages] = useState(messagesFirst)
  const ref = useRef(null);
  console.log(selectedDates);
  const selectDateHandler = (date) => {
    const newSelectedDates = selectedDates.includes(date)
      ? selectedDates.filter((x) => x !== date)
      : [...selectedDates, date];
    addSelectedDate(newSelectedDates);
  };

  const onConversationClick = async ({id}) => {
    //console.log(id);
    setConversationItem(await doctorChatApi.getConversation(id));
  };

  const sendMessage = async () => {
    console.log(conversationItem.id);

    setMessage("");
    const newMessage = {
      position: "right",
      type: "text",
      title: "You",
      text: ref.current.value,
    };
    const newMessagesList = [...messages, newMessage];

    setMessages(newMessagesList);
    ref.current.value = "";

    //setMessage("");
    // const response = await doctorChatApi.postMessage(conversationItem.id, {
    //   content: ref.current.value,
    // });

    // setConversationItem((prev) => ({
    //   ...prev,
    //   messages: [...prev.messages, response],
    // }));
    // ref.current.value = "";
  };

  useEffect(() => {
    setMessages(messagesFirst);

    //doctorChatApi.getAllConversations().then(setConversation);

    // const interval = setInterval(() => {
    //   doctorChatApi.getAllConversations().then(setConversation);
    // }, 10000);
    //setConversation(messages);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);
  console.log()
  return (
    <div>
      <div className={classes.dateWrapper}>
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
      </div>
      <div className={classes.chatWrapper}>
        <ChatList
          className="chat-list"
          onClick={onConversationClick}
          dataSource={[
            {
              avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
              alt: 'kursat_avatar',
              title: 'Kursat',
              subtitle: "Why don't we go to the No Way Home movie this weekend ?",
              date: new Date(),
              unread: 3,
            }
        ]}
        />
        <MessageList
          className={classes.messageList}
          lockable={true}
          toBottomHeight={"100%"}
          // dataSource={conversationItem.messages.map(
          //   ({ content, fromName, time, fromPatient }) => ({
          //     position: fromPatient ? "left" : "right",
          //     type: "text",
          //     text: content,
          //     date: new Date(time.replaceAll("'", "").slice(0, -1)),
          //     title: fromName,
          //   })
          // )}
          dataSource={messages}
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
        />
        <div className={classes.chatFooter}>
          <Input
            referance={ref}
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Btn onClick={sendMessage}  variant="outlined" sx={{ backgroundColor: "#FFBB69", ":hover": {
                backgroundColor: "#5C5552",
                color: "aliceblue"
              }}}>
                Send
              </Btn>
              // <Button text={"Send"}  onClick={sendMessage} title="Send" style={{ backgroundColor: "#FFBB69", ":hover": {
              //   backgroundColor: "#5C5552",
              //   color: "aliceblue"
              // }}}/>
            }
          />
        </div>
      </div>
      <Btn component={Link} to="/test-video"  variant="outlined" sx={{ backgroundColor: "#FFBB69", ":hover": {
        backgroundColor: "#5C5552",
        color: "aliceblue"
      }}}>
        Call to patient
      </Btn>
      <Btn component={Link} to="/test-video"  variant="outlined" sx={{ backgroundColor: "#FFBB69", ":hover": {
        backgroundColor: "#5C5552",
        color: "aliceblue"
      }}}>
        Log out
      </Btn>
    </div>
  );
}
