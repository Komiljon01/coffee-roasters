// rrd imports
import { Link } from "react-router-dom";

// CSS
import "./Hero-main.css";

function HeroMain() {
  return (
    <section className="hero container">
      <div className="container-inside">
        <div className="hero-content">
          <h1 className="hero-title">Great coffee made simple.</h1>
          <p className="hero-text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="plan" className="btn hero-btn">
            Create a plan
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroMain;
