import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"

function App() {

  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
