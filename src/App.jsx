import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import FloatLink from "./components/FloatLink";
import "./components/Float.css";

function App() {
  return (
    <>
      <FloatLink />
      <div className="container">
        <Header />
        <Section>
          <div className="contents">
            <Outlet />
          </div>
          <Footer />
        </Section>
      </div>
    </>
  );
}

export default App;
