import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo";
import Layout from "../containers/Layout/Layout";
import * as ga from "../lib/ga";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider {...{ client }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
