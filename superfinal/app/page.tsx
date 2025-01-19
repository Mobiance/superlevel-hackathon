import Hero from "./Components/Hero";
import CardsSection from "./Components/CardsSection";
import QuoteSection from "./Components/QuoteSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="h-full items-center overflow-hidden justify-center flex flex-col text-white bg-[#121212] w-full ">
      <Hero />
      <CardsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}




