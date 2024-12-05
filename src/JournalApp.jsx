import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

function JournalApp() {

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}

export default JournalApp
