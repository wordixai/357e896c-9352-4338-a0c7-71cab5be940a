import { Navbar } from "../components/Navbar";
import { ProductBadges } from "../components/ProductBadges";
import { HeroSection } from "../components/HeroSection";
import { FeatureCards } from "../components/FeatureCards";
import { FeaturesSection } from "../components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-8">
        <ProductBadges />
        <HeroSection />
        <FeatureCards />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Index;
