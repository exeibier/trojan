import Head from "next/head";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Experiencias Trojan</title>
        <meta name="description" content="Experiencias trojan" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header-container">
        <Header />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}
