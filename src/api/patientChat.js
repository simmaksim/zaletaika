import axios from "axios";
import { api } from "./base";

export const patientChatApi = {
  getConversation: (payload) => {
    return api.get("patient/conversation/", payload);
  },
  getUnreadMessages: (payload) => {
    return api.get("patient/patient/conversation/unread-messages/", payload);
  },
  postMessage: (payload) => {
    return api.post("patient/conversation/", payload);
  },
  putAsRead: (payload) => {
    return api.put("patient/conversation/mark-as-read/", payload);
  },
};
