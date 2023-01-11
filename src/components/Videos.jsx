import React from 'react'
import {Stack, Box} from '@mui/material'
import {VideoCard, ChanneCard, Loader} from './'


function Videos({videos, direction}) {

  if(!videos?.length) return <Loader />;
  return (
    <Stack direction={ direction || 'row'} flexWrap='wrap'
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