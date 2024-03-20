import React from 'react'
import Routers from './Routers'
import theme from './theme/theme'
import { ThemeProvider } from '@emotion/react'
import { globalStyles } from './theme/globalStyles'

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        {globalStyles}
        <Routers />
    </ThemeProvider>
)

export default App
