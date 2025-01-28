import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    messageSaved: true,
    notes: [],
    active: null,
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
      savingNewNote: (state) => {
        state.isSaving = true
      },
      addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload) // puedo mutarlo con push debido a Redux Toolkit, sino deberia desestructurarlo
        state.isSaving = false
      },
      setActiveNote: (state, action) => {
        state.active = action.payload
      },
      setNotes: (state, action) => {
        state.notes = action.payload
      },
      setSaving: (state, action) => {
        state.isSaving = action.payload
      },
      updateNote: (state, action) => {
        state.isSaving = false
        state.notes = state.notes.map(note => {
          if (note.id === action.payload.id) {
            return action.payload
          }
          return note
        })
      },
      deleteNoteById: (state, action) => {
        state.active = null
        state.notes = state.notes.filter(note => note.id !== action.payload)
      }
    }
})

export const { 
  addNewEmptyNote, 
  deleteNoteById,
  savingNewNote,
  setActiveNote, 
  setNotes, 
  setSaving, 
  updateNote,
} = journalSlice.actions
