import Grid from '@mui/material/Grid2'
import { CircularProgress } from "@mui/material"

export const CheckingAuth = () => {

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
        sx={{ width: { sm: 450 } }}
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  )
}