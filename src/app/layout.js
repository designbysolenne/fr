import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import './assets/css/theme.css';
import Script from "next/script";

require('dotenv').config();

export const metadata = {
  title: 'Design By Solenne | Graphiste Freelance',
  description: 'Design By Solenne | Graphiste Freelance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <Header/>
      {children}
      <Footer/>

      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
      />
      </body>
    </html>
  )
}