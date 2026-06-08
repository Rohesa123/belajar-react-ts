import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import StatsGrid from "./components/StatsGrid";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Languages from "./components/Languages";
import FeaturedProjects from "./components/FeaturedProjects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { GithubProvider } from "./github/GithubProvider";

function App() {
  return (
    <GithubProvider>
      <div className="min-h-screen bg-ink text-fog">
        <Navbar />
        <main>
          <ProfileHeader />
          <StatsGrid />
          <AboutMe />
          <TechStack />
          <Languages />
          <FeaturedProjects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </GithubProvider>
  );
}

export default App;
