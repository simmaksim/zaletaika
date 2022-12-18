import axios from "axios";
import { api } from "./base";

export const doctorChatApi = {
  getAllConversations: () => {
    return api.get("doctor/conversations/");
  },

  getConversation: (id) => {
    return api.get(`doctor/conversations/${id}/`);
  },

  postMessage: (id, payload) => {
    return api.post(`doctor/conversations/${id}/`, payload);
  },

  getUnreadMessage: (id) => {
    return api.get(`doctor/conversations/${id}/unread-messages/`);
  },

  putAsRead: (id, payload) => {
    return api.put(`doctor/conversations/${id}/mark-as-read/`, payload);
  },

};
