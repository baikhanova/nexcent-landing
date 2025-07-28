import Header from "./components/Header.jsx";
import RegisterSection from "./components/RegisterSection.jsx";
import ClientsSection from "./components/ClientsSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import StatisticSection from "./components/StatisticSection.jsx";
import ArticleSection from "./components/ArticleSection.jsx";
import CitationSection from "./components/CitationSection.jsx";
import MarketingSection from "./components/MarketingSection.jsx";
import DemoSection from "./components/DemoSection.jsx";
import Footer from "./components/Footer.jsx";
import AudioPlayer from "./components/AudioPlayer.jsx";

function App() {
    return (
        <>
            <AudioPlayer />
            <Header />
            <RegisterSection />
            <ClientsSection />
            <FeaturesSection />
            <AboutSection />
            <StatisticSection />
            <ArticleSection />
            <CitationSection />
            <MarketingSection />
            <DemoSection />
            <Footer />
        </>
    );
}

export default App;