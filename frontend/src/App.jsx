import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    // http://localhost:5173/
    // http://localhost:5173/about
    // http://localhost:5173/contact
    <>
      <ToastContainer />
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </>
  )
}

export default App
