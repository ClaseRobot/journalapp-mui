// Los Thunks son acciones que puedo dispachear y que internamente tienen una tarea asincrona
// Funcionan como intermediarios entre el servicio de logueo y la accion disparada

import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"

// Para el caso que las acciones sean sincronas se pueden hacer en los reducer
export const checkingAuthentication = ( email, password ) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => { // start para indicar que da inicio a una tarea asincrona
  return async (dispatch) => {
    dispatch(checkingCredentials())
    console.log('startGoogleSignIn')
    const resp = await signInWithGoogle()
    console.log(resp)
    if(!resp.ok) return dispatch(logout(resp.errorMessage))
    
    dispatch(login(resp))

  }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await registerUserWithEmailPassword({email, password, displayName})
    if (!resp.ok) return dispatch(logout(resp.errorMessage))
    console.log('resp', resp.errorMessage)

    dispatch(login(resp))
  
  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials()) // cambio estado a checking y bloqueo botones

    const resp = await loginWithEmailPassword({email, password})
    console.log(resp)

    if(!resp.ok) return dispatch(logout(resp))
    dispatch(login(resp))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout())
  }
}