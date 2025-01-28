import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import  Grid  from '@mui/material/Grid2'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMemo } from "react";

export const SideBarItem = ( { title = '', body, id, index } ) => {
  
  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + '...' : title
  }, [title])

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <Grid container >
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}