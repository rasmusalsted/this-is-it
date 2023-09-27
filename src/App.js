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
import NewsAdmin from "./Pages/Admin/Ture/NewsAdmin";
import EditNews from "./Pages/Admin/Ture/EditNews";
import CreateNews from "./Pages/Admin/Ture/CreateTour";
import AboutAdmin from "./Pages/Admin/About/AboutAdmin";
import CreateTestimonial from "./Pages/Admin/Home/CreateTestimonial";
import Login from "./Helpers/Login";
import Destination from "./Components/Destination";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(


      <>
        {/* PUBLIC */}
        <Route path="/" element={<Layout />}>
          {<Route index element={<Home/>} />}
          <Route path="Rumfærgen" element={<Rumfærgen />} />
          <Route path="Ture" element={<Ture/>} />
          <Route path="Ture/:newsID" element={<Destination/>} />
          <Route path="Galleri" element={<Galleri />} />
          <Route path="Sikkerhed" element={<Sikkerhed />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>


        {/* ADMIN */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="NewsAdmin" element={<NewsAdmin />} />
          <Route path="CreateNews" element={<CreateNews />} />
          <Route path="AboutAdmin" element={<AboutAdmin />} />
          <Route path="CreateTestimonial" element={<CreateTestimonial />} />
          <Route path="EditNews/:newsID" element={<EditNews />} />
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
