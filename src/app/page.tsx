import Header from "./components/Header/Header";
//import NavBar from "./components/Nav/navBar";
import Footer from "./components/Footer/Footer";
import ConceptList from "./components/Concepts/ConceptList";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/Projects/ProjectSection";
import YoutubeList from "./components/YoutubeList/YoutubeList"

export default function Home() {
  return (
    <>
      <Header />
      <ConceptList />
      <ProjectSection />
      <Jobs />
      <YoutubeList />
      <Contact />
      <Footer />
    </>
  );
}

