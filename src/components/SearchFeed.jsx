import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { NavBar, Videos } from "./";
import axios from "axios";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div>
      <NavBar />
    
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" mb={2} fontWeight="bold" sx={{ color: "white" }}>
        Search Results for
        <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
    </div>
  );
}

export default SearchFeed;
