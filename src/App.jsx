import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MiniMap from "./components/MiniMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <MiniMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
