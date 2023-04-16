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
          </Box>
        </Box>
       
      </Stack>
    </Box>
    </div>
  );
};


export default VideoDetail;
