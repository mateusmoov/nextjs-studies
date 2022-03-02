import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/MainContainer.module.css";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
