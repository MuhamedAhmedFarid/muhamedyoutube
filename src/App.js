import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'
import {NavBar, VideoDetail, Feed, ChannelDetail, SearchFeed} from './components'
import Form from './components/Form'
function App() {
  return (
    <BrowserRouter>
        <Box sx={{background: '#000'}}>
            <NavBar />
            <Form />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App