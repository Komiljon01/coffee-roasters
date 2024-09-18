// Components
import HeroMain from "../../components/hero-main/Hero-main";
import Collections from "../../components/collections/Collections";
import Choose from "../../components/choose/Choose";

// CSS
import "./Home.css";

function Home() {
  return (
    <>
      <HeroMain />
      <Collections />
      <Choose />
    </>
  );
}

export default Home;
