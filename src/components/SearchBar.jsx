import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'
function SearchBar() {
  return (
    <Paper 
    component='form'
    onSubmit={() => {}}
    sx={{borderRadius: 20, mr:{md:5}, pl:2, border:'1px solid #e3e3e3' }}>
        <input 
        className='search-bar'
        placeholder='Search...'
        value=''
        onChange={() => {}}
        />
        <IconButton type='submit' sx={{p:'10px', color: 'red'}}>
            <Search/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar