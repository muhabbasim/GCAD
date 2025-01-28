import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import Footer from '../../components/light/home-main/Footer';
import Header from '../../components/light/home-main/Header';
import Intro from '../../components/light/home-main/Intro';
import Marquee from '../../components/light/home-main/Marquee';
import Services from '../../components/light/home-main/Services';
// import Services2 from '../../components/light/home-main/Services2';
import Team from '../../components/light/home-main/Team';
import Brands from '../../components/light/services2/Brands';
import Skills from '../../components/light/modern-startup/Skills';
// import Contact from '../../components/light/home-freelancer/Contact';
import Navbar from '../../components/light/home-freelancer/Navbar';
import Services3 from '../../components/light/home-main/Services3';

export default function LHomeMain() {
  return (
    <>
      <Helmet>
        <title>GCAD</title>
        <link rel="icon" href="/light/assets/imgs/fox.png" />
        <link rel="shortcut icon" href="/light/assets/imgs/fox.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/light/assets/js/scripts.js"></script>
        {/* <script src="/light/assets/js/smoother-script.js"></script> */}
      </Helmet>
      
      <body>
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <Header />
              <div className="padded-container">
                <Intro />
                <Services />
                <Services3 />
                {/* <Services2 /> */}
                <Skills />
                <Marquee />
                <Team />
                <Brands />
                {/* <Contact />  */}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
