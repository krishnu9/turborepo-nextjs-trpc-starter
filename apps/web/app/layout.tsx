import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Rizz",
  description: "Create NFT on Solana network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>
              {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
