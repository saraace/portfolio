import { useRouter } from "next/dist/client/router";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== "/" && <Header />}
      {children}
    </div>
  );
};

export default Layout;
