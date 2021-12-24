import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Investing in the future of FoodTech, PharmaTech,
Crypto EFT & Hyper-Local Microservices."
            key="description"
          />
          <meta
            property="og:title"
            content="Lexington | MANAGEMENT CONSULTING"
            key="title"
          />
          <meta
            property="og:description"
            content="Management Consulting |
AI, Smart FX, Blockchain, Hyper-Local Microservices.  Web 3.0 Blockchain domain IPFS"
            key="description"
          />
          <meta property="og:url" content="https://lexingtontech.us" />
          <meta property="og:type" content="website" />
          <meta
            property="keywords"
            content="Management Consulting, AI, Artificial Intelligence, ML, Machine Learning, Web 3.0, Blockchain, domain, IPFS, Interplantary File System, IPFS, Storj, Quantum Management, FoodTech, BioTech, Hyperlocal Microservices, Crypto, Forex, ETF, Pharmatech"
            key="keywords"
          />
          <link rel="shortcut icon" href="/ico_logo_lxt.svg" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script
            id="convertful-api"
            src="https://app.convertful.com/Convertful.js?owner=6615"
            async
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js"
            type="text/javascript"
          ></script>
          <script
            src="https://api.minymon.com/minymon.js"
            defer
            type="text/javascript"
          ></script>
        </Head>
        <body className="text-slate-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          <div className="minymon">
            <minymon-body
              enableFeed="true"
              enableTalk="true"
              idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLlFTd3pzZUVzWGJNOV81bjJpYmgtTw=="
              infoTitle="Hi there!"
              theme="purple"
            >
              <minymon-feedback
                description="Your message has been to Lexington Tech."
                mid="1adfed27-bc47-4f82-a00d-b268529e3cbd"
                theme="purple"
                uid="QSwzseEsXbM9_5n2ibh-O"
              ></minymon-feedback>
              <minymon-dialog
                dialog="%5B%7B%22id%22%3A%22JoU4X4A-G8Qw9-u1f7n_Z%22%2C%22prompt%22%3A%22Hi%20I%27m%20Lex%22%2C%22responses%22%3A%5B%7B%22id%22%3A%2211C32NBtgptj2E4aYu2oy%22%2C%22response%22%3A%22I%27m%20a%20Minymon%21%20A%20limited%20edition%20digital%20collectible.%22%2C%22nextPromptId%22%3Anull%7D%5D%7D%5D"
                theme="purple"
              ></minymon-dialog>
            </minymon-body>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
