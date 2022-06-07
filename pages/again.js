import Head from "next/head";
import Again from "../components/Again/Again";


export default function tryAgain() {
  return (
    <div>
      <Head>
        <title>Experiencias Trojan</title>
        <meta name="description" content="Experiencias trojan" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Again/>
    </div>
  );
}
