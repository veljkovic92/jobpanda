import Body from "./Body/Body";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Body children={children} />
      <Footer />
    </>
  );
};

export default Layout;
