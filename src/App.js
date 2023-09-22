import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"



//PAGES
import Home from "./Pages/Home";
import Omos from "./Pages/Omos"
import Service from "./Pages/Service";
import Faq from "./Pages/Faq";
import Nyheder from "./Pages/Nyheder";
import Kontakt from "./Pages/Kontakt";

import NoMatch from "./Helpers/NoMatch";
import HomeAdmin from "./Pages/Admin/Home/HomeAdmin";
import LayoutAdmin from "./Layout/Admin/LayoutAdmin";
import Layout from "./Layout/Layout";
import NewsAdmin from "./Pages/Admin/News/NewsAdmin";
import EditNews from "./Pages/Admin/News/EditNews";
import CreateNews from "./Pages/Admin/News/CreateNews";
import AboutAdmin from "./Pages/Admin/About/AboutAdmin";
import CreateTestimonial from "./Pages/Admin/Home/CreateTestimonial";
import Login from "./Helpers/Login";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(


      <>
        {/* PUBLIC */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Omos" element={<Omos />} />
          <Route path="Service" element={<Service />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Nyheder" element={<Nyheder />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="Login" element={<Login />} />
        </Route>


        {/* ADMIN */}
{/*          <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="NewsAdmin" element={<NewsAdmin />} />
          <Route path="CreateNews" element={<CreateNews />} />
          <Route path="AboutAdmin" element={<AboutAdmin />} />
          <Route path="CreateTestimonial" element={<CreateTestimonial />} />
          <Route path="EditNews/:newsID" element={<EditNews />} />
        </Route>  */} 
      </>

    )
  )




  return (

    <div>

      <RouterProvider router={router}/>

    </div>
  );

}

export default App;
