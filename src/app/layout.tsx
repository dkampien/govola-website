import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GoVola Content Engine - Create Once. Distribute Everywhere.",
  description: "Streamline your social media workflow with intelligent video generation and multi-platform distribution. From raw footage to published content in minutes.",
  keywords: "TikTok automation, content distribution, video generation, social media management, Vola.ro",
  authors: [{ name: "Vola.ro" }],
  openGraph: {
    title: "GoVola Content Engine",
    description: "Automate your TikTok content strategy with intelligent video generation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
