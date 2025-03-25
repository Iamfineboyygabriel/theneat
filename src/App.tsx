import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import NavBar from "./components/layout/navBar";
import AboutUs from "./pages/aboutsUs/aboutUs";
import { ROUTES } from "./components/constants/routes";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <NavBar />
        <main className="mt-8 mb-2">
          <Routes>
            <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
