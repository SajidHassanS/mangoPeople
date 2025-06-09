// app/layout.js

import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata = {
  title: "Mango People",
  description: "Aam logon ka Khaas Khana"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Provider>
          <Header />
          {children}
          {/* Floating WhatsApp icon */}
          <WhatsAppButton />

          {/* Scroll-to-top arrow button */}
          <ScrollToTopButton />
        </Provider>
      </body>
    </html>
  );
}
