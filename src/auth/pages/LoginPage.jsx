import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Google } from '@mui/icons-material'
import { Button, Link, TextField, Typography, Grid2 } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: ''
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

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
        <Grid2 container>
          <Grid2 xs={12} sx={{ mt: 2 }}>
            <TextField name='email' onChange={onInputChange} type='email' label='Email' value={email}  placeholder='Email@email.com' />
          </Grid2>
          <Grid2 xs={12} sx={{ mt: 2 }}>
            <TextField name='password' onChange={onInputChange} type='password' label='Password' value={password}  placeholder='12345678' />
          </Grid2>
          <Grid2 container spacing={2} sx={{ mt: 2, mb: 1}}>
            <Grid2 xs={12} sm={6}>
              <Button disabled={isAuthenticating} type='submit' variant='contained' >Login</Button>
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <Button disabled={isAuthenticating} onClick={onGoogleSingnIn} variant='contained' >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to='/auth/register'>Crear una cuenta</Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  )
}