import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Public_Sans as FontSans, Ibarra_Real_Nova as FontSerif } from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/layouts/header";
import FooterSection from "../components/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

const sans = FontSans({
  preload: true,
  display: 'swap',
  variable: '--ff-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
const serif = FontSerif({
  preload: true,
  display: 'swap',
  variable: '--ff-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Promise Developer",
  description: "Experienced mid-level web developer with a passion for crafting dynamic digital experiences. Proficient in modern technologies including React, Next.js, and Python. Skilled in writing clean, accessible code and adept at adapting to project requirements. Based in Lagos, Sangotedo, with a willingness to relocate or work remotely. Explore my portfolio to witness expertise in action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        {/* <div className="container mx-auto"> */}
          <NavBar />
            {children}
          <FooterSection />
        {/* </div> */}
      </body>
    </html>
  );
}
