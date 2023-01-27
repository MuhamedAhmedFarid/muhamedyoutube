import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos, Loader, NavBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoDetail() {
  const { id } = useParams();
  return (
    <div>
      <NavBar />
    
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            {/* <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography> */}
            {/* <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack> */}
          </Box>
        </Box>
        {/* <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box> */}
      </Stack>
    </Box>
    </div>
  );
};


export default VideoDetail;
