import './globals.css'
import Link from 'next/link'
import AnimatedBackground from '../components/AnimatedBackground'

export const metadata = {
  title: 'My Portfolio',
  description: 'Minimal portfolio by Keerthana R',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <nav className="shadow px-12 py-5 flex justify-center gap-12 text-sm tracking-widest uppercase text-white/80 backdrop-blur-sm bg-black/20 sticky top-0">
            <Link href="/" className="hover:text-green-400 transition-colors duration-200">Home</Link>
            <Link href="/projects" className="hover:text-green-400 transition-colors duration-200">Projects</Link>
            <Link href="/skills" className="hover:text-green-400 transition-colors duration-200">Skills</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors duration-200">Contact</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
