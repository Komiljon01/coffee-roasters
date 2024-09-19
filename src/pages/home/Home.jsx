// Components
import HeroMain from "../../components/hero-main/Hero-main";
import Collections from "../../components/collections/Collections";
import Choose from "../../components/choose/Choose";
import Works from "../../components/works/Works";

// CSS
import "./Home.css";

function Home() {
  return (
    <>
      <HeroMain />
      <Collections />
      <Choose />
      <Works />
    </>
  );
}

export default Home;
