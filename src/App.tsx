import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import NavBar from "./components/layout/navBar";
import AboutUs from "./pages/aboutsUs/aboutUs";
import { ROUTES } from "./components/constants/routes";
import Footer from "./components/layout/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <NavBar />
        <main className="mt-8">
          <Routes>
            <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
