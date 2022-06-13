import Head from "next/head";
import Congratulations from "../components/Congratulations/Congratulations";
import Footer from "../components/Footer/Footer";


export default function Congrats() {
  return (
    <div>
      <Head>
        <title>Experiencias Trojan</title>
        <meta name="description" content="Experiencias trojan" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Congratulations/>
      <Footer link={'/privacy'} bgFooter={'congratulations'}/>

    </div>
  );
}
