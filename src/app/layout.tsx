import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Thomas Kidane - Portfolio",
  description: "Computer Science Student at Duke University, Class of 2028. Passionate about web development, machine learning, and technology innovation.",
  keywords: ["Thomas Kidane", "Duke University", "Computer Science", "Portfolio", "Web Development", "React", "TypeScript"],
  authors: [{ name: "Thomas Kidane" }],
  creator: "Thomas Kidane",
  openGraph: {
    title: "Thomas Kidane - Portfolio",
    description: "Computer Science Student at Duke University, Class of 2028",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Kidane - Portfolio",
    description: "Computer Science Student at Duke University, Class of 2028",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
