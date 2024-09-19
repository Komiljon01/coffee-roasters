// Components
import Commitment from "../../components/commitment/Commitment";
import HeroSecondary from "../../components/hero-secondary/HeroSecondary";

// CSS
import "./About.css";

function About() {
  return (
    <>
      <HeroSecondary>
        <div className="about-hero">
          <div className="container-inside">
            <h2>About Us</h2>
            <p>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </HeroSecondary>
      <Commitment />
    </>
  );
}

export default About;
