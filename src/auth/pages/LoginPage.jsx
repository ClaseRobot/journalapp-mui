import { Link, TextField, Typography } from '@mui/material'
import  Grid  from '@mui/material/Grid2'
import { AuthLayout } from '../layout/AuthLayout'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {

  const dispatch = useDispatch()

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)

    dispatch(checkingAuthentication(email, password))

    onResetForm()
  }

  const onGoogleSingnIn = () => {
    console.log('onGoogleSingIn')

    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField name='email' onChange={onInputChange} type='email' label='Email' value={email}  placeholder='Email@email.com' />
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField name='password' onChange={onInputChange} type='password' label='Password' value={password}  placeholder='12345678' />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2, mb: 1}}>
            <Grid xs={12} sm={6}>
              <button type='submit' variant='contained' >Login</button>
            </Grid>
            <Grid xs={12} sm={6}>
              <button onClick={onGoogleSingnIn} variant='contained' >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to='/auth/register'>Crear una cuenta</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}