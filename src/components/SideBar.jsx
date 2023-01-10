import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selcetedCategory = 'New'

function SideBar({selectedCategory ,setSelectedCategory}) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {
        categories.map((category) => {
          return (
            <button 
            onClick={() => {setSelectedCategory(category.name)}}
            className="category-btn"
            style={{background: category.name === selcetedCategory && '#FC1503', color: 'white'}}
            key={category.name}
            >
              <span style={{color: category.name === selcetedCategory ? 'white' : 'red', marginRight:'15px'}}>{category.icon}</span>
              <span style={{opacity: category.name === selcetedCategory ? 1 : 0.8}}>{category.name}</span>
            </button>
          )
        })
      }
    </Stack>
  );
}

export default SideBar;
