import { Helmet } from 'react-helmet';
import Lines from '../components/light/common/Lines';
import ProgressScroll from '../components/light/common/ProgressScroll';
import Cursor from '../components/light/common/cusor';
import Header from '../components/light/services-details/Header';
import Services from '../components/light/services-details/Services';
// import FAQS from '../components/light/services-details/FAQS';
import Navbar from '../components/light/home-freelancer/Navbar';
import { useParams } from 'react-router-dom';
import Footer from '../components/light/home-main/Footer';
import { serviceData } from '../l-data/services';

export default function LPageServicesDetails() {
  const serviceId = useParams().id;
  const service = serviceData?.find((service) => service.id === serviceId);

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
      <>
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header {...service}/>
                <div className="padded-container">
                <Services {...service}/>
                {/* <Process /> */}
                {/* <Testimonials /> */}
                {/* <Services2 /> */}
                {/* <FAQS /> */}
                </div>
            </main>
            <Footer />
          </div>
        </div>
      </>
    </>
  );
}
