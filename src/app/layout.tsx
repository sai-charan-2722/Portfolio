import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sai-charan-yadav-portfolio.vercel.app/"),
  title: "Sai Charan | Frontend Engineer — Angular, TypeScript, MEAN Stack",
  description:
    "Portfolio of U Sai Charan, a Frontend Engineer at Cognizant building fast Angular applications. Reduced app load time by 30%. Open to mid/senior frontend & full-stack roles.",
  keywords: [
    "frontend engineer",
    "angular developer",
    "typescript",
    "ngrx",
    "mean stack",
    "hyderabad",
    "react",
    "next.js",
  ],
  authors: [{ name: "U Sai Charan" }],
  openGraph: {
    title: "Sai Charan | Frontend Engineer",
    description:
      "Angular developer building fast, pixel-perfect UIs. 30% performance track record.",
    url: "https://sai-charan.vercel.app",
    siteName: "Sai Charan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Charan | Frontend Engineer",
    description: "Angular developer building fast, pixel-perfect UIs.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0F172A",
              color: "#F8FAFC",
              border: "1px solid rgba(124,58,237,0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
