import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

interface Props {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </>
  );
}
