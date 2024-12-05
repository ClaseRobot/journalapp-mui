import { Link, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from 'react-router-dom'
import  Grid  from '@mui/material/Grid2'
import { TextField } from '@mui/material'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <Grid container>
        <Grid xs={12} sx={{ mt: 2 }}>
          <TextField type='text' label='Nombre' variant='outlined' placeholder='Jane Doe' />
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <TextField type='email' label='Email' variant='outlined'  placeholder='Email@email.com' />
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <TextField type='password' label='Password' variant='outlined'  placeholder='12345678' />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2, mb: 1}}>
        <Grid xs={12}>
          <button variant='contained' >Crear cuenta</button>
        </Grid>
      </Grid>

      <Grid container direction='row' justifyContent='end'>
        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
        <Link component={ RouterLink } color='inherit' to='/auth/login'>Ingresar</Link> 
      </Grid>
    </AuthLayout>
  )
}