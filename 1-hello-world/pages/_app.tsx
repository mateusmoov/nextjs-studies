import "../styles/globals.css";
import MainContainer from "../components/MainContainer";

function MyApp({ Component, pageProps }: any) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}

export default MyApp;
