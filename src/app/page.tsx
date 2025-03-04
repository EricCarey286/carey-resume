import Header from "./components/Header/Header";
//import NavBar from "./components/Nav/navBar";
import Footer from "./components/Footer/Footer";
import ConceptList from "./components/Concepts/ConceptList";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/Projects/ProjectSection";
import YoutubeList from "./components/YoutubeList/YoutubeList"

export default function Home() {
  const apiKey = process.env.YOUTUBE_API_KEY || '';
  const serviceKey = process.env.SERVICE_KEY || '';
  const templateKey = process.env.TEMPLATE_KEY || '';
  const publicKey = process.env.PUBLIC_KEY || '';

  return (
    <>
      <Header />
      <ConceptList />
      <ProjectSection />
      <Jobs />
      <YoutubeList apiKey={apiKey}/>
      <Contact serviceKey={serviceKey} templateKey={templateKey} publicKey={publicKey}/>
      <Footer />
    </>
  );
}

