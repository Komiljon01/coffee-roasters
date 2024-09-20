import "./Uncompromising.css";

function Uncompromising() {
  return (
    <section className="uncompromising container">
      <div className="container-inside">
        <div className="uncompromising-content">
          <h2 className="uncompromising-title">Uncompromising quality</h2>
          <p className="uncompromising-text">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <picture className="uncompromising-img">
          <source
            media="(min-width: 768px)"
            srcSet="../assets/about/desktop/image-quality.jpg"
          />
          <source
            media="(min-width: 375px)"
            srcSet="../assets/about/tablet/image-quality.jpg"
          />
          <img
            src="../assets/about/mobile/image-quality.jpg"
            alt="cup of coffee"
          />
        </picture>
      </div>
    </section>
  );
}

export default Uncompromising;
