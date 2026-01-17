import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogoFactory - Create Beautiful Logos",
  description: "Create stunning logos with our easy-to-use logo maker tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
