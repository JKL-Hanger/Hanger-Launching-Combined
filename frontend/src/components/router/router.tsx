import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "../header";
import VisionPage from "../../Pages/VisionPage";
import MainPage from "../../Pages/MainPage";
import Footer from "../footer";
import ManagerPage from "../../Pages/ManagerPage";
import Team from "../../Pages/TeamPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/managers" element={<ManagerPage />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
