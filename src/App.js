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
import { PrivateRoot } from "./components/PrivateRoot/PrivateRoot";
import { DoctorPage } from "./components/DoctorPage/DoctorPage";

export const Context = React.createContext();

function App() {
  const [doctor, isDoctor] = useState(false);
  return (
    <main>
      <Context.Provider value={[doctor, isDoctor]}>
        {!doctor ? (
          <Routes>
            <Route path="/registration" element={<SignUp />} exact />
            <Route path="/logIn" element={<LoginPage />} exact />
            <Route
              path="/mailconfirmation"
              element={
                <PrivateRoot>
                  <MailConfirmation />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/tokenconfrimation"
              element={
                <PrivateRoot>
                  <TokenConf />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/resetingpassword"
              element={
                <PrivateRoot>
                  <ResetingPassword />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/calculator"
              element={
                <PrivateRoot>
                  <Calculator />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/menu"
              element={
                <PrivateRoot>
                  <Menu />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/exercises"
              element={
                <PrivateRoot>
                  <Exercise />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/doctor"
              element={
                <PrivateRoot>
                  <Doctor />
                </PrivateRoot>
              }
            />
            <Route
              path="/videocall"
              element={
                <PrivateRoot>
                  <VideoCall />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/"
              element={
                <PrivateRoot>
                  <StartPage />
                </PrivateRoot>
              }
              exact
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/registration" element={<SignUp />} exact />
            <Route path="/logIn" element={<LoginPage />} exact />
            <Route
              path="/mailconfirmation"
              element={
                <PrivateRoot>
                  <MailConfirmation />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/tokenconfrimation"
              element={
                <PrivateRoot>
                  <TokenConf />
                </PrivateRoot>
              }
              exact
            />
            <Route
              path="/resetingpassword"
              element={
                <PrivateRoot>
                  <ResetingPassword />
                </PrivateRoot>
              }
              exact
            />
            <Route path="/" element={<DoctorPage />} exact />
          </Routes>
        )}
      </Context.Provider>
    </main>
  );
}

export default App;
