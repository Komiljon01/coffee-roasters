// rrd imports
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
