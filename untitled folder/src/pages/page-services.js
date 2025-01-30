import { Helmet } from 'react-helmet';
import Lines from '../components/light/common/Lines';
import ProgressScroll from '../components/light/common/ProgressScroll';
import Cursor from '../components/light/common/cusor';
import Header from '../components/light/services/Header';
import Services from '../components/light/services/Services';
import Navbar from '../components/light/home-freelancer/Navbar';
import Marquee from '../components/light/home-main/Marquee';
import Footer from '../components/light/home-main/Footer';
export default function LPageServices() {
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
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header />
              <div className="padded-container">
                <Services />
                <div className='mb-60'>
                  <Marquee />
                </div>
              </div>
              {/* <Price /> */}
              {/* <Testimonials /> */}
              {/* <Process /> */}
              {/* <Blog /> */}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
