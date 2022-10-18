import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <Head /> */}
        <Head>
          <link
            // href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            // rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
