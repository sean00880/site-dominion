import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";
  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="zxx">
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
              rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=montserrat&family=Smooch+Sans&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/png" href="/images/favicon.png"></link>
          </Head>
          
          <body>
          <a href="#main" class="skip-to-main-content-link">Skip to main content</a>
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