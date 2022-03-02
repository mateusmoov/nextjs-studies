import Head from "next/head";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Pagina Principal</title>
      </Head>
      <Image src="/images/saia.jpg" height="700" width="400" />
      <h1>SAIA IMEDIATAMENTE, NÃO TEM NADA PRA VOCÊ AQUI</h1>
    </>
  );
}
