import MobileNav from "@/Components/MobileNav";
import Navigation from "@/Components/nav";
import { useState } from "react";

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Navigation openNav={openNav}/>
      HomePage
    </div>
  );
};

export default HomePage;
