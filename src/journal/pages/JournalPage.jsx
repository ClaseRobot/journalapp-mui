import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Typography } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    console.log('Nueva nota')
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {/* <Typography>Sobre si conocía donaciones anónimas o no anónimas en efectivo al partido, JAMÁS, además, 
        me gustan los catalanes porque hacen cosasy si no puedo bajar los gastos y no puedo subir los ingresos me puede explicar usted cómo se 
        reduce el déficit público? Porque yo confieso que lo desconozco, por otra parte, no hay chisteras anticrisis, la segunda ya tal...
      </Typography> */}
      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}
      <IconButton onClick={ onClickNewNote } disabled={isSaving} size='large' sx={{
         color: 'white', 
         backgroundColor: 'error.main',
         ':hover' : { backgroundColor: 'error.main', opacity: 0.9 },
         position: 'fixed',
         right: 50,
         bottom: 50 }}>
          <AddOutlined sx={{ fontSize: 30 }} />
         </IconButton>
    </JournalLayout>
  )
}