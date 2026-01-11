import { Navbar } from "../components/Navbar";
import { ProductBadges } from "../components/ProductBadges";
import { HeroSection } from "../components/HeroSection";
import { FeatureCards } from "../components/FeatureCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-8">
        <ProductBadges />
        <HeroSection />
        <FeatureCards />
      </main>
    </div>
  );
};

export default Index;
