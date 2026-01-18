import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Sant Paul High School - Excellence in Education (Playgroup to High School)",
  description:
    "Sant Paul High School provides world-class education with a focus on holistic development, academic excellence, and character building. Offering state-of-the-art facilities from Pre-Primary to High School levels.",
  keywords: "Sant Paul High School, school, education, high school, matriculation, boarding, hostel, best school, Patepur, Vaishali",
  icons: {
    icon: "/abs/favicon.ico",
    shortcut: "/abs/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
