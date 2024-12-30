import { useDispatch } from "react-redux"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import  Grid  from '@mui/material/Grid2'
import { startLogout } from "../../store/auth/thunks"


export const Navbar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch()

  const onLogout = () => {
    console.log('logout')
    dispatch( startLogout() )
  }

  return (
    <AppBar position='fixed' 
      sx={{ 
        width: {sm : `calc(100% - ${drawerWidth}px)`},
        ml:{ sm: `${drawerWidth}px`}
      }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>
        
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}> JournalApp </Typography>

          <IconButton color='error' onClick={ onLogout }>
              <LogoutOutlined />
          </IconButton>
        
      </Toolbar>
    </AppBar>
  )
}