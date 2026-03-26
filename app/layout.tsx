import type { Metadata } from "next";
import { Poppins, Lobster } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const lobster = Lobster({
  variable: '--font-lobster',
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata: Metadata = {
  title: "Ângelo's Blog",
  description: "My brain's backup and thoughts",
  icons: {
    icon: "/logo-white.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lobster.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
