import {Box} from "@mui/material";
import {MdDarkMode,MdOutlineLightMode} from "react-icons/md"
import { toggler } from "../../types";



export default function Toggler({darkMode, handleClick}:toggler) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img"><MdOutlineLightMode/></span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img"><MdDarkMode/></span>
         }
      </Box>
   )
}

//🌕
//🌑