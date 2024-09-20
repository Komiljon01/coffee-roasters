// Components
import HeroSecondary from "../../components/hero-secondary/HeroSecondary";
import Guide from "../../components/guide/Guide";

// CSS
import "./Plan.css";

function Plan() {
  return (
    <>
      <HeroSecondary>
        <div className="plan-hero">
          <div className="container-inside">
            <h1>Create plan</h1>
            <p>
              Coffee the way you wanted it to be. For coffee delivered tomorrow,
              or next week. For whatever brew method you use. For choice, for
              convenience, for quality.
            </p>
          </div>
        </div>
      </HeroSecondary>
      <Guide />
    </>
  );
}

export default Plan;
