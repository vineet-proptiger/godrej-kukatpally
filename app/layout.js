import "./globals.css";
import { Open_Sans, Montserrat, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const nephilm = localFont({
  src: "../public/fonts/Nephilm.otf",
  variable: "--font-nephilm",
  display: "swap",
});

export const metadata = {
  title:
    "Godrej Kukatpally | Luxury 3/4 BHK Apartments — Price Starting ₹2 Cr Onwards",
  description:
    "Godrej Kukatpally — Premium 3/4 BHK residences at Kukatpally, Hyderabad. Price starting @ ₹2 Cr* onwards. 7.83 acres, 2 towers, G+46 floors, 50+ amenities by Godrej Group.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <body
        className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}
      >
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  );
}
