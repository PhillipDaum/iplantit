import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import circle1 from '../img/1_round.png';
const SearchField = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'flex-end'
  }}>
   <FontAwesomeIcon icon={solid('magnifying-glass')}/>
    <TextField id="input-with-sx" label="Search" variant="standard"/>
  </Box>
)

function StepsCard(props) {
  return ( <></>
  )}
  
  
export {SearchField, StepsCard}