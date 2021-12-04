import "../styles/globals.css";
import "../styles/index.scss";
import { AuthContext } from "../utils/auth-context";
import { isAuthenticated, isLocalHost, unAuthenticate } from "../utils";
import router, { useRouter } from "next/router";
import { initializeGA, logPageView } from "../utils/Analytics";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../seo.config";
import Script from "next/script";
import config from "../config";
import Footer from "../components/footer";
import Speaker_card from "../components/speaker-card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header/index";
import Timeline_card from "../components/timeline";

function MyApp({ Component, pageProps }) {
  // initial_user
  initializeGA(isAuthenticated());

  const router = useRouter();
  const location = router.pathname;
  logPageView(location);

  return (
    <AuthContext.Provider value={{ user: isAuthenticated() }}>
      <DefaultSeo {...defaultSEOConfig} />
      <ToastContainer />
      <Script
        strategy="lazyOnload"
        src={`"https://www.googletagmanager.com/gtag/js?id=${config.GOOGLE_ANALYTICS_ID}"`}
      />
      <Script id="initialize-gtag" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${config.GOOGLE_ANALYTICS_ID}');
           `}
      </Script>
      <Header />
      <Component {...pageProps} />
      <Speaker_card/>
      <Timeline_card/>
      <Footer />
    </AuthContext.Provider>
  );
}
export default MyApp;
