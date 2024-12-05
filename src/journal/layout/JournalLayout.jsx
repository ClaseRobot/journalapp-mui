import { Box } from "@mui/material"
import { Navbar, Sidebar } from "../components"


const drawerWidth = 280

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      
    {/* Navbar */}
    <Navbar drawerWidth={ drawerWidth } />

    {/* Sidebar */}
    <Sidebar drawerWidth={ drawerWidth } />

    <Box component='main' sx={{ flexGrow: 1, p: 9 }}>
      {/* Toolbar */}
      { children }
    </Box>

    </Box>
  )
}