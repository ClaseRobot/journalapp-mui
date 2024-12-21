// Los Thunks son acciones que puedo dispachear pero que internamente tienen una tarea asincrona
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
    const result = await signInWithGoogle()
    console.log(result)
    if(!result.ok) return dispatch(logout(result.errorMessage))
    
    dispatch(login(result))

  }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await registerUserWithEmailPassword({email, password, displayName})
    if (!resp.ok) return dispatch(logout(resp.errorMessage))

    dispatch(login(resp))
  
  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials())

    const resp = await loginWithEmailPassword({email, password})
    console.log(resp)

    if(!resp.ok) return dispatch(logout(resp))
    return dispatch(login(resp))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout())
  }
}