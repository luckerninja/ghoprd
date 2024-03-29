import { ConnectKitButton } from 'connectkit'
import { Box } from '@mui/material'
import GHOWidget from './GHOWidget'
import Logo from './icons/logo.svg?react'

export default function Header() {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#D8CDEC',
        margin: '0 auto',
        borderRadius: '10px',
        width: '55%',
        height: '60px',
        alignItems: 'center'
      }} px='5%'>
            <Logo style={{height: '70%'}} />
            <Box sx={{width: '25%', display: 'flex', justifyContent: 'space-between'}}>
              <GHOWidget />
              <ConnectKitButton customTheme={{
                "--ck-connectbutton-background": "#A095B5",
                "--ck-connectbutton-border-radius": "20px"
              }}/>
            </Box>
      </Box>
    )
  }