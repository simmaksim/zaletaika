import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { SignUp } from "./components/SignUp/SignUp";
import { MailConfirmation } from "./components/MailConfirmation/MailConfirmation";
import { Routes, Route } from "react-router-dom";
import { TokenConf } from "./components/TokenConf/TokenConf";
import { ResetingPassword } from "./components/ResetingPassword/ResetingPassword";
import { StartPage } from "./components/StartPage/StartPage";
import { Header } from "./components/Header/Header";
import { Calculator } from "./components/Calculator/Calculator";
import { Menu } from "./components/Menu/Menu";
import { Exercise } from "./components/Exersices/Exercises";
import { Doctor } from "./components/Doctor/Doctor";
import { VideoCall } from "./components/VideoCall/VideoCall";
import React, { useState } from "react";

export const Context = React.createContext()

function App() {
  const [doctor, isDoctor] = useState(false);
  return (
    <>
      <Header />
      <main>
        <Context.Provider value={[doctor, isDoctor]}>
          <Routes>
            <Route path="/registration" element={<SignUp />} />
            <Route path="/logIn" element={<LoginPage />} />
            <Route path="/mailconfirmation" element={<MailConfirmation />} />
            <Route path="/tokenconfrimation" element={<TokenConf />} />
            <Route path="/resetingpassword" element={<ResetingPassword />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/exercises" element={<Exercise />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/videocall" element={<VideoCall />} />
            <Route path="/" element={<StartPage />} />
          </Routes>
        </Context.Provider>
        
      </main>
    </>
  );
}

export default App;
