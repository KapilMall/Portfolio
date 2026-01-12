import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "./lib/ThemeContext"

function App() {

  return (
    <>
    <ThemeProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route  index element={ <Home /> } />
          <Route  path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
