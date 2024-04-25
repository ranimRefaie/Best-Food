import Category from "./Components/Category";
import Foods from "./Components/Foods";
import HeadlineCards from "./Components/HeadlineCards";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
