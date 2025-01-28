import { Helmet } from 'react-helmet';
import Header from '../../components/light/about/Header';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import Intro from '../../components/light/about/Intro';
import Marquee from '../../components/light/about/Marquee';
import Intro2 from '../../components/light/about/Intro2';
import Team from '../../components/light/about/Team';
// import Blog from '../../components/light/about/Blog';
import Navbar from '../../components/light/home-freelancer/Navbar';
import Footer from '../../components/light/home-main/Footer';

export default function LPageAbout() {
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
        {/* <LoadingScreen /> */}
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header />
              <div className="padded-container">
                <Intro />
                <Marquee />
                <Intro2 />
                <Team />
                {/* <Blog /> */}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
