import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo";
import Layout from "../containers/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider {...{ client }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
