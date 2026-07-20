import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Favour Williams — AI Content & Cinematic Product Video Creator",
  description: "Portfolio of Favour Williams — AI content creator, cinematic product video creator and video editor crafting high-converting commercials for premium brands.",
  authors: [{ name: "Favour Williams" }],
  openGraph: {
    title: "Favour Williams — AI Content & Cinematic Product Video Creator",
    description: "Portfolio of Favour Williams — AI content creator, cinematic product video creator and video editor crafting high-converting commercials for premium brands.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5186e286-4c2c-4df6-82e6-c8b4ef363f00/id-preview-94a978e6--49d96deb-7c70-47cd-8a38-88565dd48fdd.lovable.app-1783457328596.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour Williams — AI Content & Cinematic Product Video Creator",
    description: "Portfolio of Favour Williams — AI content creator, cinematic product video creator and video editor crafting high-converting commercials for premium brands.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5186e286-4c2c-4df6-82e6-c8b4ef363f00/id-preview-94a978e6--49d96deb-7c70-47cd-8a38-88565dd48fdd.lovable.app-1783457328596.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
