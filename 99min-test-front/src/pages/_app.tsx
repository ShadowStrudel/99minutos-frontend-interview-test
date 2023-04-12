import "@/styles/styles.css";
import "@/styles/card.css";
import "@/styles/about.css";
import "@/styles/responsive.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
