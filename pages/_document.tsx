import { NextComponentType } from "next";
import {
  AppContextType,
  AppInitialProps,
  AppPropsType,
} from "next/dist/shared/lib/utils";
import Document, { DocumentContext } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            (
              App: NextComponentType<
                AppContextType,
                AppInitialProps,
                AppPropsType
              >
            ) =>
            (props) =>
              sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
