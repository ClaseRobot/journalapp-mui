import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Typography } from "@mui/material"
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

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [ formSubmited, setFormSubmitted ] = useState(false)

  const { 
    formState, displayName, email, password, onInputChange, onResetForm,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidation)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    console.log(formState)

    if( !isFormValid ) return

    dispatch(startCreatingUserWithEmailPassword(formState))

  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField name='displayName' value={displayName} onChange={onInputChange} type='text' label='Nombre' variant='outlined' placeholder='Jane Doe' error={ !!displayNameValid && formSubmited } helperText={ displayNameValid }/>
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField name='email' value={email} onChange={onInputChange} type='email' label='Email' variant='outlined'  placeholder='Email@email.com' error={ !!emailValid && formSubmited } helperText={ emailValid } />
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField name='password' value={password} onChange={onInputChange} type='password' label='Password' variant='outlined'  placeholder='12345678' error={ !!passwordValid && formSubmited } helperText={ passwordValid }/>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2, mb: 1}}>
          <Grid xs={12}>
            <button type='submit' variant='contained' >Crear cuenta</button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link component={ RouterLink } color='inherit' to='/auth/login'>Ingresar</Link> 
        </Grid>
      </form>
    </AuthLayout>
  )
}