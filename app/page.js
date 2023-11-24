import Image from 'next/image'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Project from './component/Project'
import SkillSection from './component/SkillSection'
import EmailSection from './component/EmailSection'
import Footer from './component/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#191919]">
      <Navbar/>
      <div class="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <Project />
        <SkillSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
