// rrd imports
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
