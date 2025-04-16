import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import AboutUs from "@/pages/AboutUs";
import Products from "@/pages/Products";
import OurMission from "@/pages/OurMission";
import WomenEmpowerment from "@/pages/WomenEmpowerment";
import FirstPeriod from "@/pages/solutions/FirstPeriod";
import PeriodGuide from "@/pages/solutions/PeriodGuide";
import Puberty from "@/pages/solutions/Puberty";
import TipsForParents from "@/pages/solutions/TipsForParents";
import CrampsIrregularBleeding from "@/pages/solutions/CrampsIrregularBleeding";
import PCOS from "@/pages/solutions/PCOS";
import PMS from "@/pages/solutions/PMS";
import VaginalDischarge from "@/pages/solutions/VaginalDischarge";
import OneStopSolution from "@/pages/OneStopSolution";
import SheDeservesBetter from "@/pages/SheDeservesBetter";
import NotFound from "@/pages/NotFound";
import Admin from "@/pages/Admin";
import { Toaster } from "@/components/ui/toaster";
import { useLoader } from "@/context/LoaderContext";
import { useEffect } from "react";
import Preloader from "./components/ui/preloader";

const AppRoutes = () => {
  const location = useLocation();
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader />}
      <div
        className={`${
          loading
            ? "opacity-50 pointer-events-none"
            : "opacity-100 transition-opacity duration-300"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/our-mission"
            element={
              <Layout>
                <OurMission />
              </Layout>
            }
          />
          <Route
            path="/women-empowerment"
            element={
              <Layout>
                <WomenEmpowerment />
              </Layout>
            }
          />
          <Route
            path="/she-deserves-better"
            element={
              <Layout>
                <SheDeservesBetter />
              </Layout>
            }
          />
          <Route
            path="/one-stop-solution"
            element={
              <Layout>
                <OneStopSolution />
              </Layout>
            }
          />

          {/* Solution routes */}
          <Route
            path="/solutions/first-period"
            element={
              <Layout>
                <FirstPeriod />
              </Layout>
            }
          />
          <Route
            path="/solutions/period-guide"
            element={
              <Layout>
                <PeriodGuide />
              </Layout>
            }
          />
          <Route
            path="/solutions/puberty"
            element={
              <Layout>
                <Puberty />
              </Layout>
            }
          />
          <Route
            path="/solutions/tips-for-parents"
            element={
              <Layout>
                <TipsForParents />
              </Layout>
            }
          />
          <Route
            path="/solutions/cramps-irregular-bleeding"
            element={
              <Layout>
                <CrampsIrregularBleeding />
              </Layout>
            }
          />
          <Route
            path="/solutions/pcos"
            element={
              <Layout>
                <PCOS />
              </Layout>
            }
          />
          <Route
            path="/solutions/pms"
            element={
              <Layout>
                <PMS />
              </Layout>
            }
          />
          <Route
            path="/solutions/vaginal-discharge"
            element={
              <Layout>
                <VaginalDischarge />
              </Layout>
            }
          />

          {/* Admin panel */}
          <Route path="/admin" element={<Admin />} />

          {/* Catch 404 */}
          <Route
            path="/not-found"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
