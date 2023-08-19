import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Readme Ease",
  description:
    "Create beautiful and professional readme.md files effortlessly with ReadmeEase.",
  keywords: ["readmeease", "readme-ease", "readme.md", "readme", "nextjs"],
  viewport: "width=device-width, initial-scale=1.0",
  category: "Software",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
