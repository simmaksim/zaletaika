import React, { useState, useCallback } from "react";
import { Lobby } from "../Lobby/Lobby";
import { Room } from "../Room/Room";

export const VideoChat = () => {
  const [username, setUsername] = useState("simmakim");
  const [roomName, setRoomName] = useState("POPUSKALOVO");
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(
    (event) => {
      setRoomName(event.target.value);
    },

    []
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = await fetch("http://192.168.43.91:3000/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setToken(data.token);
    },
    [username, roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  if (token) {
    return (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    return (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
};
