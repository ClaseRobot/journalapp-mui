// Los Thunks son acciones que puedo dispachear pero que internamente tienen una tarea asincrona

import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials } from "./authSlice"

// Para el caso que las acciones sean sincronas se pueden hacer en los reducer
export const checkingAuthentication = ( email, password ) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => { // start para indicar que da inicio a una tarea asincrona
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = signInWithGoogle()
  }
}