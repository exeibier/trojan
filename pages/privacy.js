import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Terms from "../components/Terms/Terms";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Experiencias Trojan</title>
        <meta name="description" content="Experiencias trojan" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Terms/>
        <Footer link={'/privacy'} bgFooter={'full'}/>
    </div>
  );
}
