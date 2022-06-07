import Head from "next/head";
import Full from "../components/Full/Full";


export default function Congrats() {
  return (
    <div>
      <Head>
        <title>Experiencias Trojan</title>
        <meta name="description" content="Experiencias trojan" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Full/>
    </div>
  );
}
