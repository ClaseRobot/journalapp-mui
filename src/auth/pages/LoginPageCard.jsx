// import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Box, Button, TextField, Typography, Link, Container, Paper, Avatar, FormControlLabel, Grid2 } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { CheckBox, Google } from '@mui/icons-material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom'

export const LoginCard = () => {
  const dispatch = useDispatch()

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: ''
  })

  const onGoogleSingIn = () => {
    // Implemenar logica de registro con google
    console.log('Login con google')

    dispatch(startGoogleSignIn())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Login con: ', email, password)

    dispatch(checkingAuthentication(email, password))

    onResetForm()
  }
  // Paper es un conenedor con un borde sombreado 
  return (
    <Container maxWidth='xs'>
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2}}> 
        <Avatar sx={{ mx: 'auto', bgcolor: 'secondary.main', textAlign: 'center', mb: 1}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ textAlign: 'center'}}>
          Sign In
        </Typography>
        <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField name='email' onChange={onInputChange} type='email' value={email} placeholder='Enter email' fullWidth required autoFocus sx={{ mb: 2 }} />
          <TextField name='password' onChange={onInputChange} type='password' value={password} placeholder='Enter password' fullWidth required />
          <FormControlLabel sx={{ ml: '-2px', mt: 1 }} control={<CheckBox value='remember' color='primary'/> } label='Remember me' />
          <Grid2 container columnSpacing={2}>
            <Grid2 size={6}>
              <Button type='submit' variant='contained' fullWidth sx={{ mt: 1 }}>
                Sign In
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <Button onClick={onGoogleSingIn} variant='contained' fullWidth sx={{ mt: 1 }}>
                <Google />
                <Typography sx={{ ml: 1, fontWeight: 'bold', fontSize: 'normal' }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
        </Box>
        <Grid2 container justifyContent='space-between' sx={{ mt: 1 }}>
          <Grid2 item='true'>
            <Link component={RouterLink} to='/forgot' sx={{ textDecoration: 'none'}}>
              Forgot Password?
            </Link>
          </Grid2>
          <Grid2 item='true'>
            <Link component={RouterLink} to='/register' sx={{ textDecoration: 'none'}}>
              Sign Up
            </Link>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  )
}