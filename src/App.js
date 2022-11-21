
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import {SignUp} from './components/SignUp/SignUp'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header className="App-header">
        
      </header>
      <main>    
        <Routes>
          <Route path="/registration" element={<SignUp />} />
          <Route path="/logIn" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
