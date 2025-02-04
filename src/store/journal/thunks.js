import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from './journalSlice'
import { loadNotes } from '../../helpers/loadNotes'

export const startNewNote = () => {
  return async(dispatch, getState) => {
    console.log('start new note')

    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    
    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`)) // la funcion doc crea una referencia al documento
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async(dispatch, getState) => {

    const { uid } = getState().auth
    if(!uid) throw new Error('El UID del usuario no existe')

    const notes = await loadNotes( uid ) // uso el helper para cargar las notas

    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async(dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth // obtengo id del usuario
    const { active:note } = getState().journal // obtengo la nota activa
  
    
    const noteToFireStore = { ...note }
    delete noteToFireStore.id // le borro el id a la nota activa para que no se actualice en firebase
    
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    
    await setDoc(docRef, noteToFireStore, { merge: true }) // tercer parametro es para mergear lo que se manda con lo que ya esta en firebase

    dispatch(updateNote(note))
  }
}