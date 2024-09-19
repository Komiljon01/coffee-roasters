// CSS
import "./Commitment.css";

function Commitment() {
  return (
    <section className="commitment container">
      <div className="container-inside">
        <picture>
          <source
            media="(768px)"
            srcSet="../assets/about/desktop/image-commitment.jpg"
          />
          <source
            media="(375px)"
            srcSet="../assets/about/tablet/image-commitment.jpg"
          />
          <img
            src="../assets/about/mobile/image-commitment.jpg"
            alt="a man who is making a coffee"
          />
        </picture>

        <div className="commitment-content">
          <h2 className="commitment-title">Our commitment</h2>
          <p className="commitment-text">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
