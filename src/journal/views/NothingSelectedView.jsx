import { Typography } from '@mui/material';
import  Grid  from '@mui/material/Grid2'
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {

  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 140px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
        <Grid xs={ 12 }>
          <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid xs={ 12 }>
          <Typography color="white" variant='h5'>Selecciona o crea una entrada</Typography>
        </Grid>
    </Grid>
  )
}