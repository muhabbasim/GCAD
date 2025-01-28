import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PortfolioMetro from './pages/dark/portfolio-metro';
// import BlogClassic from './pages/dark/blog-classic';
// import BlogDetails from './pages/dark/blog-details';
// import BlogList from './pages/dark/blog-list';
// import BlogList2 from './pages/dark/blog-list2';
// import HomeAsymmetricPortfolio from './pages/dark/home-asymmetric-portfolio';
// import HomeCreativeAgency from './pages/dark/home-creative-agency';
// import HomeCreativePortfolio from './pages/dark/home-creative-portfolio';
// import HomeDigitalAgency from './pages/dark/home-digital-agency';
// import HomeFreelancer from './pages/dark/home-freelancer';
// import HomeMain from './pages/dark/home-main';
// import HomeMinimalPortfolio from './pages/dark/home-minimal-portfolio';
// import HomeModernAgency from './pages/dark/home-modern-agency';
// import HomePersonalVcard from './pages/dark/home-personal-vcard';
// import HomeStartupOnePage from './pages/dark/home-startup-onepage';
// import PageAbout from './pages/dark/page-about';
// import PageAbout2 from './pages/dark/page-about2';
// import PageAbout3 from './pages/dark/page-about3';
// import PageContact from './pages/dark/page-contact';
// import PageContact2 from './pages/dark/page-contact2';
// import PageContact3 from './pages/dark/page-contact3';
// import PageError404 from './pages/dark/page-error404';
// import PageFAQS from './pages/dark/page-FAQS';
// import PageServices from './pages/dark/page-services';
// import PageServicesDetails from './pages/dark/page-services-details';
// import PageServices2 from './pages/dark/page-services2';
// import PageTeam from './pages/dark/page-team';
// import PageTeamSingle from './pages/dark/page-team-single';
// import PortfolioCaptionCursor from './pages/dark/portfolio-caption-cursor';
// import PortfolioGallery from './pages/dark/portfolio-gallery';
// import PortfolioMasonry from './pages/dark/portfolio-masonry';
// import PortfolioOutline from './pages/dark/portfolio-outline';
// import PortfolioParallax from './pages/dark/portfolio-parallax';
// import PortfolioSticky from './pages/dark/portfolio-sticky';
// import Project1 from './pages/dark/project1';
// import Project2 from './pages/dark/project2';
// import Project3 from './pages/dark/project3';
// import Project4 from './pages/dark/project4';
// import Project5 from './pages/dark/project5';
// import Project6 from './pages/dark/project6';
// import ShowcaseCarousel from './pages/dark/showcase-carousel';
// import ShowcaseFullScreen from './pages/dark/showcase-fullscreen';
// import ShowcaseHalfSlider from './pages/dark/showcase-half-slider';
// import ShowcaseInteractiveCenter from './pages/dark/showcase-interactive-center';
// import ShowcaseInteractiveFull from './pages/dark/showcase-interactive-full';
// import ShowcaseInteractiveVertical from './pages/dark/showcase-interactive-vertical';
// import Home from './pages';

// import LPortfolioMetro from './pages/light/portfolio-metro';
// import LBlogClassic from './pages/light/blog-classic';
// import LBlogDetails from './pages/light/blog-details';
// import LBlogList from './pages/light/blog-list';
// import LBlogList2 from './pages/light/blog-list2';
// import LHomeAsymmetricPortfolio from './pages/light/home-asymmetric-portfolio';
// import LHomeCreativeAgency from './pages/light/home-creative-agency';
// import LHomeCreativePortfolio from './pages/light/home-creative-portfolio';
// import LHomeDigitalAgency from './pages/light/home-digital-agency';
// import LHomeFreelancer from './pages/light/home-freelancer';
import LHomeMain from './pages/light/home-main';
// import LHomeMinimalPortfolio from './pages/light/home-minimal-portfolio';
// import LHomeModernAgency from './pages/light/home-modern-agency';
// import LHomePersonalVcard from './pages/light/home-personal-vcard';
// import LHomeStartupOnePage from './pages/light/home-startup-onepage';
import LPageAbout from './pages/light/page-about';
// import LPageAbout2 from './pages/light/page-about2';
// import LPageAbout3 from './pages/light/page-about3';
import LPageContact from './pages/light/page-contact';
// import LPageContact2 from './pages/light/page-contact2';
// import LPageContact3 from './pages/light/page-contact3';
// import LPageError404 from './pages/light/page-error404';
// import LPageFAQS from './pages/light/page-FAQS';
import LPageServices from './pages/light/page-services';
import LPageServicesDetails from './pages/light/page-services-details';
// import LPageServices2 from './pages/light/page-services2';
// import LPageTeam from './pages/light/page-team';
// import LPageTeamSingle from './pages/light/page-team-single';
// import LPortfolioCaptionCursor from './pages/light/portfolio-caption-cursor';
// import LPortfolioGallery from './pages/light/portfolio-gallery';
// import LPortfolioMasonry from './pages/light/portfolio-masonry';
// import LPortfolioOutline from './pages/light/portfolio-outline';
// import LPortfolioParallax from './pages/light/portfolio-parallax';
// import LPortfolioSticky from './pages/light/portfolio-sticky';
// import LProject1 from './pages/light/project1';
// import LProject2 from './pages/light/project2';
// import LProject3 from './pages/light/project3';
// import LProject4 from './pages/light/project4';
// import LProject5 from './pages/light/project5';
// import LProject6 from './pages/light/project6';
// import LShowcaseCarousel from './pages/light/showcase-carousel';
// import LShowcaseFullScreen from './pages/light/showcase-fullscreen';
// import LShowcaseHalfSlider from './pages/light/showcase-half-slider';
// import LShowcaseInteractiveCenter from './pages/light/showcase-interactive-center';
// import LShowcaseInteractiveFull from './pages/light/showcase-interactive-full';
// import LShowcaseInteractiveVertical from './pages/light/showcase-interactive-vertical';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LHomeMain />} />
        <Route path="/about" element={<LPageAbout />} />
        <Route path="/contact" element={<LPageContact />} />
        <Route path="/services" element={<LPageServices />} />
        <Route path="/services-details/:id" element={<LPageServicesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
