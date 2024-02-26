

import Layoutt from "./components/root/Layoutt"
import Aboutus from "./pages/Aboutus"
import Home from "./pages/Home"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Pricing from "./pages/Pricing"
import Clients from "./pages/Clients"
import Protfolio from "./pages/Protfolio"
import Studies from "./pages/Studies"
import Blogpage from "./pages/Blogpage"
import Readblog from "./pages/Readblog"
import Contact from "./pages/Contact"
import Privecypolicy from "./pages/Privecypolicy"
import Api from "./pages/Api"
import Apitwo from "./components/apitwo/Apitwo"



const router = createBrowserRouter (createRoutesFromElements(
  <Route element={<Layoutt/>} >
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/aboutus" element={<Aboutus/>}> </Route>
    <Route path="/pricing" element={<Pricing/>}> </Route>
    <Route path="/clients" element={<Clients/>}> </Route>
    <Route path="/protfolio" element={<Protfolio/>}> </Route>
    <Route path="/studies" element={<Studies/>}> </Route>
    <Route path="/blogpage" element={<Blogpage/>}> </Route>
    <Route path="/readblog" element={<Readblog/>}> </Route>
    <Route path="/contact" element={<Contact/>}> </Route>
    <Route path="/privecypolicy" element={<Privecypolicy/>}> </Route>
    <Route path="/api" element={<Api/>}> </Route>
    {/* <Route path="/apitwo" element={<Apitwo/>}> </Route> */}
  
  </Route>
))

function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
