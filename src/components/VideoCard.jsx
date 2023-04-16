
import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from "@mui/icons-material";
import { demoChannelUrl, demoVideoUrl, demoThumbnailUrl, demoChannelTitle,demoVideoTitle } from "../utils/constants";

function VideoCard({ video:{id : {videoId}, snippet} }) {
    return (
        <Card sx={{width: {md: '320px', xs: '100%'},  borderRadius: 0 , boxShadow:'none'} } >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                sx={{width: 358, height: 180 }}
                image={snippet?.thumbnails?.high?.url} />
            </Link>
            <CardContent sx={{height: '106px', backgroundColor:'#1e1e1e'}} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
                    {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight='bold' color='gray'>
                    {snippet?.channelTitle.slice(0, 50) || demoChannelTitle.slice(0, 50)}
                    <CheckCircle sx={{fontSize: '12px', color:'gray', ml: '5px'}}/>
                </Typography>
            </Link>

        
            </CardContent>
        </Card>

    )
}

export default VideoCard;
