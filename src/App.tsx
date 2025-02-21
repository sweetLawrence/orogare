import './App.css'

import { createTheme, MantineProvider } from '@mantine/core'
// import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

const theme = createTheme({})

function App () {
  return (
    <MantineProvider theme={theme}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </MantineProvider>
  )
}

export default App
