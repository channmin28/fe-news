import { Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
  return (
    <>
      {/* <Header/> */}
      <Outlet />
      {children}

      {/* <Footer /> */}
    </>
  );
}
