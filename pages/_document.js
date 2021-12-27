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
            content="Management Consulting, AI, Artificial Intelligence, ML, Machine Learning, Web 3.0, Blockchain, domain, IPFS, Interplantary File System, IPFS, Fleek, Storj, Quantum Management, FoodTech, BioTech, Hyperlocal Microservices, Crypto, Forex, ETF, Pharmatech"
            key="keywords"
          />
          <link rel="shortcut icon" href="/ico_logo_lxt.svg" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script async src="https://cdn.announcekit.app/widget-v2.js"></script>
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
                description="Send a message to Lexington Tech."
                mid="1adfed27-bc47-4f82-a00d-b268529e3cbd"
                theme="purple"
                uid="QSwzseEsXbM9_5n2ibh-O"
              ></minymon-feedback>
              <minymon-dialog
                dialog="%5B%7B%22id%22%3A%22JoU4X4A-G8Qw9-u1f7n_Z%22%2C%22prompt%22%3A%22Hi%20I%27m%20Lex%22%2C%22responses%22%3A%5B%7B%22id%22%3A%2211C32NBtgptj2E4aYu2oy%22%2C%22response%22%3A%22I%27m%20a%20Minymon%21%20A%20limited%20edition%20digital%20collectible.%22%2C%22nextPromptId%22%3A%226ZOwikcZqJ65d_0K0O5Dc%22%7D%2C%7B%22id%22%3A%22OgtrZE6gomhm7KfuUwu23%22%2C%22response%22%3A%22Minymons%20are%20limited%20edition%20digital%20collectibles%2C%20but%20they%u2019re%20not%20stored%20on%20the%20blockchain.%20We%20may%20consider%20making%20them%20NFTs%20in%20the%20future%2C%20but%20for%20now%20they%u2019re%20just%20regular%20digital%20collectibles%20with%20nothing%20to%20do%20with%20crypto%22%2C%22nextPromptId%22%3A%226ZOwikcZqJ65d_0K0O5Dc%22%7D%5D%7D%2C%7B%22id%22%3A%226ZOwikcZqJ65d_0K0O5Dc%22%2C%22prompt%22%3A%22Our%20Web%203.0%20home%20%28lexingtontech.us%29%20is%20built%20on%20the%20blockchain%21%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22nqENQN7bi_UA9dTUxStjS%22%2C%22response%22%3A%22Technology%20powering%20our%20domain%20includes%20NextJS%2C%20IPFS%20%20%26%20Polygon%20%28MATIC%29.%22%2C%22nextPromptId%22%3Anull%7D%5D%7D%5D"
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
