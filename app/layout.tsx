import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Orvixa LLC", description: "Official website for Orvixa LLC" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
