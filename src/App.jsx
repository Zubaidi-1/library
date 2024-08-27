import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const heroRef = useRef();
  const searchRef = useRef();
  const openModal = useSelector((state) => state.modal.open);
  function scrollIntoHero() {
    heroRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function scrollIntoSearch() {
    searchRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <>
      <Header scrollHero={scrollIntoHero} scrollSearch={scrollIntoSearch} />
      <Hero scrollSearch={scrollIntoSearch} ref={heroRef} />
      <Search ref={searchRef} />
      {openModal && <Modal />}
    </>
  );
}

export default App;
