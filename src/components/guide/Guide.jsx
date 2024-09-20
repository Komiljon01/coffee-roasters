// Guide data
import { guideData } from "../../data";

// CSS
import "./Guide.css";

function Guide() {
  return (
    <section className="guide container">
      <div className="container-inside">
        <div className="guide-cards">
          {guideData.map((item) => (
            <div className="guide-card" key={item.id}>
              <h1 className="guide-card-number">{item.number}</h1>
              <h3 className="guide-card-title">{item.title}</h3>
              <p className="guide-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Guide;
