import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import  Grid  from '@mui/material/Grid2'
import { useSelector } from "react-redux";

export const Sidebar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector( state => state.auth );

  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: {xs: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' nowrap='true' component='div'>{ displayName }</Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            ['Inbox', 'Starred', 'Send email', 'Drafts'].map(( text, index ) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <Grid container >
                    <ListItemText primary={text} />
                    <ListItemText secondary="¿Qué se cree usted? ¿Que todos los políticos de mi partido venimos de la pata del Cid?" />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}