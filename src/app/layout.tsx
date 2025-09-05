import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'My Portfolio',
  description: 'Minimal portfolio by Keerthana R',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-linear-to-t from-grey-500 to-sky-500 shadow p-4 flex justify-center space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/research">Blogs, Articles and Reports</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
