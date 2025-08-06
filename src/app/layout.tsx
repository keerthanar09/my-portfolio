// src/app/layout.tsx

import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'My Portfolio',
  description: 'Minimal portfolio by [Your Name]',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow p-4 flex justify-center space-x-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
