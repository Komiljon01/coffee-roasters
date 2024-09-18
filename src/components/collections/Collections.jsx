// CSS
import { collectionsData } from "../../data";
import "./Collections.css";

function Collections() {
  return (
    <section className="collections container">
      <div className="container-inside">
        <div className="collections-content">
          {collectionsData.map((collection) => (
            <div className="collection-card" key={collection.id}>
              <img src={collection.image} alt={collection.title} />

              <div className="collection-card-content">
                <h4 className="collection-card-title">{collection.title}</h4>
                <p className="collection-card-text">{collection.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
