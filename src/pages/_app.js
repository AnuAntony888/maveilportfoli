import Footer from "@/comp/Footer";
import Header from "@/comp/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (<>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async />

      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        async
      ></script>
      <script type="text/javascript" async />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
  <Header />
  <Component {...pageProps} />
<Footer/>
  </>)
}

// import Header from "../comp/Header";

// import '@/styles/globals.css'
// import Footer from "../comp/Footer";

// function App({ Component, pageProps }) {
//   return (
//     <>

//       <Header />
//       <Component {...pageProps} />
//       <Footer />
//     </>
//   );
// }

// export default App;

