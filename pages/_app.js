import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { UserProvider } from "../store/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
