import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Sobre si conocía donaciones anónimas o no anónimas en efectivo al partido, JAMÁS, además, 
        me gustan los catalanes porque hacen cosasy si no puedo bajar los gastos y no puedo subir los ingresos me puede explicar usted cómo se 
        reduce el déficit público? Porque yo confieso que lo desconozco, por otra parte, no hay chisteras anticrisis, la segunda ya tal...
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton size='large' sx={{
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