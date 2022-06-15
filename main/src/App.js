import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard';
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();

  if(!isAuthenticated) {
    
  return (
    <Login />
  );
  }

else {
  return(

    <Dashboard />
  )
    
}
 
}

export default App;
