
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center">
    <div className='m-5 mb-20 flex flex-row items-center space-x-10'>
        <div><Image className='outline-5 outline-white outline-offset-10 rounded-full inset-shadow-sm inset-shadow-black' src = "/profile.jpeg" alt = "Profile" width={300} height={300}/></div>
        <div><h1 className="text-4xl font-bold mb-4">Hello World, I am Keerthana R</h1></div>
    </div>
      
      <p className="text-lg text-gray-600 mb-6">Aspiring Software Engineer | Emerging Tech Enthusiast | CSE Student</p>
      <div className="space-x-4">
        <a
            href="/resume.pdf"
            download
            style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Download My Resume
          </a>
      </div>
    </main>
  )
}
