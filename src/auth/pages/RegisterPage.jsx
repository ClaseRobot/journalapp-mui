import { useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Box, Button, Container, Link, Paper, Typography } from "@mui/material"
import { TextField } from '@mui/material'
import  Grid  from '@mui/material/Grid2'
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidation = {
  email: [(value) => value.includes('@'), 'El email es requerido'],
  password: [(value) => value.length >= 8, 'La contraseña debe tener al menos 8 caracteres'],
  displayName: [(value) => value.length >= 3, 'El nombre debe tener al menos 3 caracteres']
}

// TODO: podria usar Gravatar para tomar la foto
export const RegisterPage = () => {

  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector(state => state.auth)
  const isChekcingAuthentication = useMemo(() => status === 'checking', [status])
  console.log('status',status, 'errorMessage', errorMessage)
  const [ formSubmited, setFormSubmitted ] = useState(false)
  
  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidation)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    // console.log(formState)

    if( !isFormValid ) return

    dispatch(startCreatingUserWithEmailPassword(formState))

  }

  return (
    // <AuthLayout title='Register'>
    <Container maxWidth='xs'>
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2}}>
        <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>Crear cuenta</Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 2, p: 2 }} autoComplete='off'>
          
              <TextField name='displayName' value={displayName} onChange={onInputChange} type='text' variant='outlined' fullWidth placeholder='Enter name' error={ !!displayNameValid && formSubmited } helperText={ displayNameValid }/>
          
            
              <TextField name='email' value={email} onChange={onInputChange} type='email' variant='outlined' fullWidth  placeholder='Enter mail' error={ !!emailValid && formSubmited } helperText={ emailValid } />
            
              <TextField name='password' value={password} onChange={onInputChange} type='password' variant='outlined' fullWidth  placeholder='Password' error={ !!passwordValid && formSubmited } helperText={ passwordValid }/>
            
          

          <Grid container direction='column' spacing={2} sx={{ mt: 2, mb: 1}}>
            <Grid display={!!errorMessage ? '' : 'none'} xs={12}>
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
            <Grid xs={12}>
              <Button disabled={isChekcingAuthentication} type='submit' variant='contained' >Crear cuenta</Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>Ingresar</Link> 
          </Grid>
        </Box>
      </Paper>
    </Container>
    // </AuthLayout>
  )
}