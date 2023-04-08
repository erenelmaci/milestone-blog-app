import React, { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux"
import store, { persistor } from "./app/store"
import { PersistGate } from "redux-persist/integration/react"

function App() {
  const [prefersDarkMode, setPrefersDarkMode] = useState(true)

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Navbar
          setPrefersDarkMode={setPrefersDarkMode}
          prefersDarkMode={prefersDarkMode}
        />
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
