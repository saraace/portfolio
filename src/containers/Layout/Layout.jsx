import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Sara Acevedo | Front End Engineer</title>
      </Head>
      {router.pathname !== "/" && <Header />}
      {children}
    </div>
  );
};

export default Layout;
