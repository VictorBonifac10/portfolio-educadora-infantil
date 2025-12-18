import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { ThemeProvider } from "next-themes";
import { ThemeBridge } from "./styles/ThemeBridge";
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <ThemeBridge>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ThemeBridge>
    </ThemeProvider>
  </StrictMode>,
)
