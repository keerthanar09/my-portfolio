
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center">
    <div className='m-5 mb-20'>
        <Image className='outline-5 outline-white outline-offset-50 rounded-full inset-shadow-sm inset-shadow-black' src = "/profile.jpeg" alt = "Profile" width={500} height={500}/>
    </div>
      <h1 className="text-4xl font-bold mb-4">Hello World, I am Keerthana R</h1>
      <p className="text-lg text-gray-600 mb-6">Aspiring Researcher | Developer | CSE Student</p>
      <div className="space-x-4">
        <a href="/research" className="text-blue-500 underline">Research</a>
        <a href="/projects" className="text-blue-500 underline">Projects</a>
        <a href="/contact" className="text-blue-500 underline">Contact</a>
      </div>
    </main>
  )
}
