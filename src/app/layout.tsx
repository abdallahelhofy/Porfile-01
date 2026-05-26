import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/ClientLayout"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Abdallah ElHoFy | Backend Engineer & ERP Specialist",
  description:
    "Backend engineer specializing in scalable systems, ERP solutions (Odoo), API architecture, and infrastructure automation.",
  keywords: [
    "backend engineer",
    "ERP specialist",
    "Odoo",
    "Node.js",
    "Python",
    "system administrator",
    "API development",
    "portfolio",
  ],
  openGraph: {
    title: "Abdallah ElHoFy | Backend Engineer & ERP Specialist",
    description:
      "Building scalable systems, ERP solutions, and modern backend architectures.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
