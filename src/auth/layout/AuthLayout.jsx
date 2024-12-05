import { Typography } from "@mui/material"
import  Grid  from '@mui/material/Grid2'


export const AuthLayout = ({ children, title = ''}) => {
  return (
    <Grid 
      container 
      spacing={0}
      direction='column' 
      alignItems='center' 
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid 
        className='box-shadow' 
        xs={3} 
        sx={{ width: { sm: 450 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1}}>{title}</Typography>  
        {children}
      </Grid>
    </Grid>
  )
}