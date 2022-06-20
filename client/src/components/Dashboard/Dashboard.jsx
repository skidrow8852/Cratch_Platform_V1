import React,{ Suspense } from 'react'
import {Box} from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import RightBar from './RightBar/RightBar';
import Header from './Header/Header';
import {ColorModeScript} from '@chakra-ui/color-mode';
import { Routes, Route } from "react-router-dom";

const Profiles = React.lazy(() => import('./Profile/Profiles'));
const Online = React.lazy(() => import('./Users/Online'));
const Verified = React.lazy(() => import('./Users/Verified'));
const Videos = React.lazy(() => import('./Videos/Videos'));

const Streams = React.lazy(() => import('./Stream/Streams'));
const Stream = React.lazy(() => import('./Stream/Stream'));
const Settings = React.lazy(() => import('./Settings/Settings'));
const Video = React.lazy(() => import('./Videos/Video'));

const Profile = React.lazy(() => import('./Profile/Profile'));
const Messages = React.lazy(() => import('./Messages/Messages'));
const Analytics = React.lazy(() => import('./Analytics/Analytics'));
const Favorites = React.lazy(() => import('./Favorites/Favorites'));

const Content = React.lazy(() => import('./Content/Content'));
const Followers = React.lazy(() => import('./Followers/Followers'));
const StreamInfo = React.lazy(() => import('./Stream/StreamInfo'));
const CreateStream = React.lazy(() => import('./Stream/CreateStream'));
const Studio = React.lazy(() => import('./Studio/Studio'));



function Dashboard() {

const Pages = () => {
  return (
    <>
    
    
            <Sidebar />
            <Box width="82%" height="100vh" bg="#111315" fontFamily="heading">
                <Header />
                <Suspense fallback={<div></div>}>
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/studio" element={<Studio />} />
                    <Route exact path="/stream" element={<CreateStream />} />
                    <Route exact path="/live/:id" element={<Stream />} />
                    <Route exact path="/stream/:id" element={<StreamInfo />} />
                    <Route exact path="/lives" element={<Streams />} />
                    <Route exact path="/video/:id" element={<Video />} />
                    <Route exact path="/videos" element={<Videos />} />
                    <Route exact path="/verified_users" element={<Verified />} />
                    <Route exact path="/online_users" element={<Online />} />
                    <Route exact path="/followers" element={<Followers />} />
                    <Route exact path="/content" element={<Content />} />
                    <Route exact path="/favorites" element={<Favorites />} />
                    <Route exact path="/analytics" element={<Analytics />} />
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/messages/:id" element={<Messages />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/profile/:id" element={<Profiles />} />
                    <Route exact path="/settings" element={<Settings />} />
                  
                  </Routes>
                </Suspense>
            </Box>
            {/* <Home /> */}

            <RightBar />
      
    </>
  )
}

  return (
    <>
 
 <ColorModeScript initialColorMode="dark" />
    <Box width="100vw" height="100vh" bg="#111315" >
      <Box width="100%" height="100%" d="flex">
            
            <Pages />
            
        </Box>

      </Box>
       

    </>
  )
}

export default Dashboard