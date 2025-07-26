import type { Metadata } from "next"
import "./globals.css"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import Header from "./components/Header"

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
      className={`bg-bg-primary ${GeistMono.variable} ${GeistSans.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans md:max-w-7xl lg:mx-auto lg:flex-row">
        <main>
          <Header />
        </main>

        {children}
      </body>
    </html>
  )
}
