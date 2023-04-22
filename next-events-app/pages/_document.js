import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" /> {/* e.g. use for React portals for modals*/}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
