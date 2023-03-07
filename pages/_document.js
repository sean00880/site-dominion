import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";
  
  class MyDocument extends Document {
    
    render() {
      const siteUrl = 'https://www.sitedominion.com';
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];
  const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);
      return (
        <Html lang="zxx">
          <Head>
            
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
              rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=montserrat&family=Smooch+Sans&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/png" href="/images/favicon.png"></link>
            <link rel="canonical" href={canonicalUrl} />
          </Head>
          
          <body>
          <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
          <main>
            <Main />
            <NextScript />
            </main>
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;