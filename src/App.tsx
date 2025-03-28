import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import NavBar from "./components/layout/navBar";
import { ROUTES } from "./components/constants/routes";
import Footer from "./components/layout/footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Services from "./pages/services/services";
import Areas from "./pages/areasCovered/areas";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <NavBar />
        <main className="mt-">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.AREAS} element={<Areas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
