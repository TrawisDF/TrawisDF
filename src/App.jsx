import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Section>
        <Outlet />
        <Footer />
      </Section>
    </div>
  );
}

export default App;
