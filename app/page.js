import Image from 'next/image'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#191919]">
      <Navbar/>
      <div class="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  )
}
