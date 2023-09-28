import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"



//PAGES
import Home from "./Pages/Home";
import Rumfærgen from "./Pages/Rumfærgen"
import Ture from "./Pages/Ture";
import Galleri from "./Pages/Galleri";
import Sikkerhed from "./Pages/Sikkerhed";
import Kontakt from "./Pages/Kontakt";

import NoMatch from "./Helpers/NoMatch";
import HomeAdmin from "./Pages/Admin/Home/HomeAdmin";
import LayoutAdmin from "./Layout/Admin/LayoutAdmin";
import Layout from "./Layout/Layout";
import TureAdmin from "./Pages/Admin/Ture/TureAdmin";
import EditTour from "./Pages/Admin/Ture/EditTour";
import CreateTour from "./Pages/Admin/Ture/CreateTour";
import AboutAdmin from "./Pages/Admin/Rumfærgen/AboutAdmin";
import Henvendelser from "./Pages/Admin/Home/Henvendelser";
import Login from "./Helpers/Login";
import Destination from "./Components/Destination";
import Nyhedsbrev from "./Pages/Admin/Nyhedsbrev/Nyhedsbrev";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(


      <>
        {/* PUBLIC */}
        <Route path="/" element={<Layout />}>
          {<Route index element={<Home/>} />}
          <Route path="Rumfærgen" element={<Rumfærgen />} />
          <Route path="Ture" element={<Ture/>} />
          <Route path="Ture/:tureID" element={<Destination/>} />
          <Route path="Galleri" element={<Galleri />} />
          <Route path="Sikkerhed" element={<Sikkerhed />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>


        {/* ADMIN */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="TureAdmin" element={<TureAdmin />} />
          <Route path="CreateTour" element={<CreateTour />} />
          <Route path="AboutAdmin" element={<AboutAdmin />} />
          <Route path="Henvendelser" element={<Henvendelser />} />
          <Route path="Nyhedsbrev" element={<Nyhedsbrev />} />
          <Route path="EditTour/:tureID" element={<EditTour />} />
        </Route>  
      </>

    )
  )




  return (

    <div>

      <RouterProvider router={router} />

    </div>
  );

}

export default App;
