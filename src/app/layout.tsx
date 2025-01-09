import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ifeanyi Mbah's Portfolio",
  description: "Detail-oriented Full Stack Developer with a\n" +
      "                            proven track record of delivering high-quality, scalable web applications and systems.\n" +
      "                            Possessing comprehensive expertise in front-end and back-end technologies, including\n" +
      "                            Next.js, React, Node.js, and MongoDB, I have successfully developed and maintained solutions\n" +
      "                            that improve user experience and operational efficiency. Skilled in designing microservice\n" +
      "                            architectures, optimizing server response times, and implementing secure, responsive\n" +
      "                            interfaces. Demonstrated ability to streamline development processes, resulting in increased\n" +
      "                            platform performance and reduced deployment time. Committed to continuous improvement,\n" +
      "                            effective collaboration, and delivering tailored solutions that meet both technical and\n" +
      "                            business objectives.",
    keywords: ["Software Development", "Software", "Developer", "Software Engineer", "Talent", "Engineer", "Full Stack Developer", "Full-stack Developer", "full-stack Engineer", "Frontend Developer", "Frontend Engineer", "Backend Developer", "Backend Engineer", "Front-end", "Back-end", "full-stack"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
