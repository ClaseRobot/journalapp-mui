import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup( FirebaseAuth, googleProvider )
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    console.log(credentials)
    const { displayName, email, photoURL, uid } = result.user
    console.log({ displayName, email, photoURL, uid })

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}


export const registerUserWithEmailPassword = async({email, password, displayName}) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL } = resp.user

    await updateProfile(FirebaseAuth.currentUser, { displayName }) // actualiza el displayName en firebase
    // FirebaseAuth.currentUser es el usuario logueado actualmente
    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}


export const loginWithEmailPassword = async({email, password}) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL, displayName } = resp.user

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {
    
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut()
}