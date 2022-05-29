import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";

function App() {

 
  return (

    <> 
    {/* <Routes>

      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      
    </Routes> */}
    <Dashboard />
    
    </>
  );
}

export default App;
