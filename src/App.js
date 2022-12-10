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

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/registration" element={<SignUp />} />
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/mailconfirmation" element={<MailConfirmation />} />
          <Route path="/tokenconfrimation" element={<TokenConf />} />
          <Route path="/resetingpassword" element={<ResetingPassword />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
