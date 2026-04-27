import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ServiGo – Apúntate gratis y accede antes que nadie a nuevas oportunidades en Perú",
  description:
    "ServiGo está preparando su lanzamiento en Perú. Regístrate gratis como profesional y accede antes que nadie a nuevas oportunidades de trabajo cerca de ti.",
  openGraph: {
    title:
      "ServiGo – Apúntate gratis y accede antes que nadie a nuevas oportunidades en Perú",
    description:
      "Únete a ServiGo y recibirás solicitudes de trabajo cerca de ti: limpieza, reparaciones, clases y muchos más.",
    url: "https://usaservigo.com",
    siteName: "ServiGo",
    locale: "es_PE",
    type: "website",
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/images/principal-simplificado.png" />
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className={inter.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
