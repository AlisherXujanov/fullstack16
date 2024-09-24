import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { context } from "./store"
import { useState } from "react"


function App() {
  const [state, setState] = useState({
    counter: 0,
    color: '',
    selectedCurrency: 'USD'
  })

  return (
    // http://localhost:5173/
    // http://localhost:5173/about
    // http://localhost:5173/contact
    <>
      <ToastContainer />
      <BrowserRouter>
        <context.Provider value={{ state, setState }}>
          <AllComponents />
        </context.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
