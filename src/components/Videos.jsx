import React from 'react'
import {Stack, Box} from '@mui/material'
import {VideoCard, ChanneCard} from './'


function Videos({videos}) {
  return (
    <Stack   direction='row' flexWrap='wrap'
    justifyContent='start' gap={2}>
        {
            videos.map((item, id) => (
                <Box key={id}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChanneCard channelDatail={item} />}
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos