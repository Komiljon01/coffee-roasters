// Works data
import { homeHowWorksData } from "../../data";

// CSS
import "./Works.css";

function Works() {
  return (
    <section className="works container">
      <div className="container-inside">
        <h4 className="works-intro">How it works</h4>

        <div className="works-cards">
          {homeHowWorksData.map((item) => (
            <div className="works-card" key={item.id}>
              <h1 className="works-card-number">{item.number}</h1>
              <h3 className="works-card-title">{item.title}</h3>
              <p className="works-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
