import React from "react";
import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Main, Html, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const styledComponentSheet = new StyledComponentSheets();
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        styledComponentSheet.collectStyles(sheets.collect(<App {...props} />)),
    });
  const initialProps = await Document.getInitialProps(ctx);
  resetServerContext();
  return {
    ...initialProps,

    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      styledComponentSheet.getStyleElement(),
      sheets.getStyleElement(),
    ],
  };
};
