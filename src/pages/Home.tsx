import DividerB from "../components/Divider/DividerB";
import DividerC from "../components/Divider/DividerC";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import MembershipBanner from "../components/MembershipBanner/MembershipBanner";
import EducationalPillars from "../components/EducationalPillars/EducationalPillars";
import SustainabilityPillars from "../components/SustainabilityPillars/SustainabilityPillars";

const Home = () => {
  return (
    <main>
      <Hero />
      <DividerB />
      <Pricing />
      <DividerC />
      <MembershipBanner />
      <EducationalPillars />
      <SustainabilityPillars />
    </main>
  );
};

export default Home;
