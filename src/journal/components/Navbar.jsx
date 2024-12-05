import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import  Grid  from '@mui/material/Grid2'


export const Navbar = ({ drawerWidth = 240 }) => {

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

          <IconButton color='error'>
              <LogoutOutlined />
          </IconButton>
        
      </Toolbar>
    </AppBar>
  )
}