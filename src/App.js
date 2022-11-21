
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import {SignUp} from './components/SignUp/SignUp'
import {MailConfirmation} from './components/MailConfirmation/MailConfirmation'
import { Routes, Route } from "react-router-dom";
import {TokenConf} from "./components/TokenConf/TokenConf"
import {ResetingPassword} from "./components/ResetingPassword/ResetingPassword"
function App() {
  return (
    <>
      <header className="App-header">
        
      </header>
      <main>    
        <Routes>
          <Route path="/registration" element={<SignUp />} />
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/mailconfirmation" element={<MailConfirmation/>} />
          <Route path="/tokenconfrimation" element={<TokenConf/>} />
          <Route path="/resetingpassword" element={<ResetingPassword />} />
          <Route path="/" element={<LoginPage />} />  
        </Routes>
      </main>
      
    </>
  );
}

export default App;
