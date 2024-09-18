// Data
import { chooseData } from "../../data";

// CSS
import "./Choose.css";

function Choose() {
  return (
    <section className="choose container">
      <div className="choose-content">
        <h2 className="choose-content-title">Why choose us?</h2>
        <p className="choose-content-text">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="choose-cards container-inside">
        {chooseData.map((item) => (
          <div className="choose-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="choose-card-content">
              <h4 className="choose-card-title">{item.title}</h4>
              <p className="choose-card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Choose;
