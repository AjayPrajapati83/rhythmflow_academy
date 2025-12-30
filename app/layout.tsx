import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RhythmFlow Academy - Where Movement Meets Mastery",
  description: "Premium dance learning platform offering courses in Contemporary, Hip-Hop, Ballet, Bollywood, Salsa, and Kathak",
  keywords: "dance academy, online dance classes, dance courses, learn dance online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
