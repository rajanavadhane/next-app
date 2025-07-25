import type { Metadata } from "next"
import "./globals.css"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

const geistMono = GeistMono
const geistSans = GeistSans

export const metadata: Metadata = {
  title: "rajanavadhane.dev",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-bg-primary ${geistMono.variable} ${geistSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
