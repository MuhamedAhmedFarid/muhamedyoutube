import { CardContent, Box, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { display, height } from '@mui/system'

function ChanneCard({ChannelDatail}) {
  return (
    <Box
    sx={{
        boxShadow :'none',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width: {xs: '356px', md : '320px' },
        height: '326px',
        margin: 'auto'
    }}
    >
        <Link to={`/channel/${ChannelDatail?.id.channelId}`}>
        <CardContent sx={{display: 'flex' , flexDirection:'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
            <CardMedia 
            image={ChannelDatail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{
                borderRadius: '50%', height: '180px', width: '180px', mb: 2, border:'1px solid #e3e3e3'
            }}
            />
            <Typography variant='h6'>
              {ChannelDatail?.snippet?.title}
              <CheckCircle sx={{fontSize:12, color:'gray', ml: '5px'}}/>
            </Typography>
            {ChannelDatail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(ChannelDatail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>
            )}
        </CardContent>
        </Link>
    </Box>
  )
}

export default ChanneCard