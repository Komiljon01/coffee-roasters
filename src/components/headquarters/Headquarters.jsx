// HeadquartesData
import { headquartersData } from "../../data";

// CSS
import "./Headquarters.css";

function Headquarters() {
  return (
    <section className="headquarters container">
      <div className="container-inside">
        <h4 className="headquerters-intro">Our headquarters</h4>

        <div className="headquarters-cards">
          {headquartersData.map((item) => (
            <div className="headquarters-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
              <p>{item.text3}</p>
              <a href={`tel:${item.number}`}>{item.number}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Headquarters;
