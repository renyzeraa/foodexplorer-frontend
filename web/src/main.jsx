import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Payment } from './pages/Payment'
import { Demand } from './pages/Demand'
import { DemandAdmin } from './pages/DemandAdmin'
import { Create } from './pages/Create'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Create />
    </ThemeProvider>
  </React.StrictMode>
)
