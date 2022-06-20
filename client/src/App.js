import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard';
import React from 'react'
import {Center, Spinner} from "@chakra-ui/react"



function App() {

  const [isLoading,setIsloading] = React.useState(true)
  const [connected,setConnected] = React.useState(false)
  const verifyConnection = async () => {
    if(localStorage.getItem('user') !== null && localStorage.getItem('user') !== 'null' && localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== 'undefined') {
      setConnected(true)
      setIsloading(false)
    }else {
      setConnected(false)
      setIsloading(false)
    }

    }
  
  React.useEffect(() => {
    verifyConnection();
  }, []);
  if(!connected) {
    
  return (
    <>{isLoading ? 
      <Center w="100%" h="100vh">
          <Spinner 
          thickness='4px'
          color='#3EA6FF'
          size='xl'
          ariaLabel='loading'
          speed='0.65s'
          emptyColor='grey'
            />
    </Center>
    :
    <Login />
    }
      
    </>
    
  );
  }

else {
  return(

    <Dashboard />
  )
    
}
 
}

export default App;
