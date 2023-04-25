import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden items-center justify-between">
      <div>
        <Header />
        <Navbar />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
