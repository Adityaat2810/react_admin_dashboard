import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy } from "react"

const Dashboard =lazy(()=>import("./pages/dashboard")) 
const Product =lazy(()=>import("./pages/product")) 



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/product' element={<Product/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App