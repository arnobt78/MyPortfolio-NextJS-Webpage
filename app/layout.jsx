import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import StairTransition from "../components/StairTransition";
import PageTransition from "../components/PageTransition";

// componants

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Arnob's PORTFOLIO",
  description: "A modern portofolio of by NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
