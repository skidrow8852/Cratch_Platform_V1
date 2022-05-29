import React from 'react'
import {Box ,useColorMode} from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import RightBar from './RightBar/RightBar';
import Header from './Header/Header';
import {ColorModeScript} from '@chakra-ui/color-mode';
import theme from '../../theme'
import Studio from './Studio/Studio';
import { Routes, Route } from "react-router-dom";
import Stream from './Stream/CreateStream';
import StreamInfo from './Stream/StreamInfo';
import Followers from './Followers/Followers';
import Content from './Content/Content';
import Favorites from './Favorites/Favorites';
import Analytics from './Analytics/Analytics';
import Messages from './Messages/Messages'


function Dashboard() {
  const {colorMode} = useColorMode();

const Pages = () => {
  return (
    <>
    
    
            <Sidebar />
            <Box width="82%" height="100vh" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading">
                <Header />
                <Routes>

                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/studio" element={<Studio />} />
                  <Route exact path="/stream" element={<Stream />} />
                  <Route exact path="/stream/:id" element={<StreamInfo />} />
                  <Route exact path="/followers" element={<Followers />} />
                  <Route exact path="/content" element={<Content />} />
                  <Route exact path="/favorites" element={<Favorites />} />
                  <Route exact path="/analytics" element={<Analytics />} />
                  <Route exact path="/messages" element={<Messages />} />
                </Routes>
            </Box>
            {/* <Home /> */}

            <RightBar />
      
    </>
  )
}

  return (
    <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    
    <Box width="100vw" height="100vh" bg={colorMode === "dark" ? "#111315" : "white"} >
      <Box width="100%" height="100%" d="flex">
            
            <Pages />
            
        </Box>

      </Box>
       

    </>
  )
}

export default Dashboard