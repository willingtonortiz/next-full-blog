import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return <div style={{ maxWidth: "500px", margin: "auto" }}>{children}</div>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
