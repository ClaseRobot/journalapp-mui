import { Box } from "@mui/material"
import { Navbar, Sidebar } from "../components"


const drawerWidth = 280

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
      
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