import Script from 'next/script';
import '../styles/main.css'; // Your CSS imports if any

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XTWLDH43VZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XTWLDH43VZ');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
