
import Head from 'next/head';
const project_title = 'XXXXX';
const domain_name = 'https://XXXXX.az/';

const SEO = ({ title, description = 'The best testing environment made real!', thumbnail = '/img/thumbnail.png', url = 'https://XXXXX.az' }) => {
  return (
    <Head>
      <title>XXXXX-Admin Panel</title>
      {/* <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" /> */}
      {/* Perfecting, Preloading */}
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap" as="style" />
      <link rel="prefetch" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap" as="style" />
      {/* Some SEO Tags */}
      <link rel="index" href={domain_name} />
      <link rel="canonical" href={domain_name} />
      <meta name="description" content={description} />
      {/* Facebook (Open Graph)  */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title ? title : project_title}`} />
      <meta property="og:site_name" content={`${title ? title : project_title}`} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={url} />
      <meta property="og:see_also" content={`${title ? title : project_title}`} />
      <meta property="og:description" content={description} />
      {/* Google  */}
      <meta itemProp="name" content={`${title ? title : project_title}`} />
      <meta itemProp="image" content={thumbnail} />
      <meta itemProp="description" content={description} />
      {/* Twitter  */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title ? title : project_title}`} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      {/* Installation credentials for the Website */}
      {/* Add to homescreen for Chrome on Android */}
      <meta name="application-name" content={project_title} />
      <meta name="theme-color" content="#fff" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* Add to homescreen for Safari on iOS */}
      <meta name="apple-mobile-web-app-title" content={project_title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      {/* Microsoft Windows Tiles */}
      <meta name="msapplication-starturl" content={domain_name} />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
      {/* Favicons */}
      <link rel="shortcut icon" href="favicon/favicon.ico" />
      {/*<link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />*/}
      {/*<link rel="mask-icon" href="/favicons/favicon.svg" color="#000000" />*/}
      {/* Apple */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="apple-touch-icon-precomposed" type="image/png" href="/favicons/apple-touch-icon-precomposed.png" />
      {/* Android */}
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
    </Head>
  );
};

export default SEO;
