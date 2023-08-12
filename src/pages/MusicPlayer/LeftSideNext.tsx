import React, { useContext } from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import IconButton from '@mui/material/IconButton';
import MusicContext from '../../context/music/MusicContext';

// interface buttonclick{
//     click:()=>void
// }

const LeftSideNext = () => {
  const context = useContext(MusicContext)
  return (
      <IconButton  aria-label="add an alarm" onClick={context?.nextHandlerleft} style={{color:'white'}}>
            <SkipPreviousIcon style={{fontSize:'50px'}} />
      </IconButton>
  )
}

export default LeftSideNext
