import Head from "next/head";
import Again from "../components/Again/Again";


export default function tryAgain() {
  return (
    <div>
      <Head>
        <title>Experiencias Trojan</title>
        <meta name="description" content="Experiencias trojan" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Again/>
    </div>
  );
}
