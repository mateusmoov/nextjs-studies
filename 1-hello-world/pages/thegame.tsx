import Head from "next/head";
import Image from "next/image";

const TheGame = () => {
  return (
    <>
      <Head>
        <title>O jogo</title>
      </Head>
      <Image src="/images/thegame.jpg" width="600" height="600" />
      <h1>O jogo</h1>
      <p>Você perdeu</p>
    </>
  );
};

export default TheGame;
