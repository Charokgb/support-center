import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Support Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Tawk.to live chat script */}
      <Script id="tawk" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/68e2fc31bf465d19518ec766/1j6rai961';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
