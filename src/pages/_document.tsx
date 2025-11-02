import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-w-80 bg-white text-gray-900 antialiased [text-rendering:optimizeLegibility]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
