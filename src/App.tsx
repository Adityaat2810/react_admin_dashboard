import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/loader"

const Dashboard =lazy(()=>import("./pages/dashboard")) 
const Product =lazy(()=>import("./pages/product")) 
const Transactions =lazy(()=>import("./pages/transaction")) 
const Customers =lazy(()=>import("./pages/customers")) 




const App = () => {
  return (
    <BrowserRouter>
     <Suspense fallback={<Loader/>}>
       <Routes>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/product' element={<Product/>}/>
          <Route path='/admin/transaction' element={<Transactions/>}/>
          <Route path='/admin/customers' element={<Customers/>}/>

          {/**charts */}


          {/**apps */}
        </Routes>
     </Suspense>
    </BrowserRouter>
  )
}

export default App