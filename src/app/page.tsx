"use client"

import { useState, useEffect } from "react"
import { Linkedin, Instagram, Trophy, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black via-black via-black via-black via-black to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Main mouse-following orb */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/[0.4] via-pink-400/[0.4] to-orange-400/[0.4] rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 8,
            top: mousePosition.y / 8,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
          }}
        />

        {/* Multiple floating orbs with different colors and animations */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/[0.3] to-blue-400/[0.3] rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />

        <div
          className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-r from-green-400/[0.25] via-emerald-400/[0.25] to-teal-400/[0.25] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "6s" }}
        />

        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-yellow-400/[0.35] via-orange-400/[0.35] to-red-400/[0.35] rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />

        <div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/[0.3] via-purple-400/[0.3] to-pink-400/[0.3] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s", animationDuration: "7s" }}
        />

        <div
          className="absolute top-1/6 left-1/2 w-56 h-56 bg-gradient-to-r from-rose-400/[0.25] via-pink-400/[0.25] to-fuchsia-400/[0.25] rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        {/* Additional smaller particles */}
        <div
          className="absolute top-1/3 left-1/6 w-32 h-32 bg-gradient-to-r from-lime-400/[0.4] to-green-400/[0.4] rounded-full blur-xl animate-ping"
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        />

        <div
          className="absolute bottom-1/2 right-1/6 w-40 h-40 bg-gradient-to-r from-amber-400/[0.35] to-yellow-400/[0.35] rounded-full blur-xl animate-ping"
          style={{ animationDelay: "2.5s", animationDuration: "4s" }}
        />

        <div
          className="absolute top-3/4 left-2/3 w-36 h-36 bg-gradient-to-r from-violet-400/[0.3] to-purple-400/[0.3] rounded-full blur-xl animate-ping"
          style={{ animationDelay: "0.8s", animationDuration: "3.5s" }}
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-white font-bold text-xl">TK</div>
              <div className="flex space-x-6">
                <a href="#education" className="text-white/[0.8] hover:text-white transition-colors">Education</a>
                <a href="#experience" className="text-white/[0.8] hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="text-white/[0.8] hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="text-white/[0.8] hover:text-white transition-colors">Skills</a>
                <a href="#contact" className="text-white/[0.8] hover:text-white transition-colors">Contact</a>
                <Link href="/blog" className="text-white/[0.8] hover:text-white transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center glass-card overflow-hidden shadow-lg border-4 border-white/30 mb-4">
                <Image
                  src="/me1.png"
                  alt="Thomas Kidane profile photo"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Thomas Kidane
              </h1>
              <div className="text-white/[0.8] mb-2 flex flex-col md:flex-row md:justify-center md:space-x-4 items-center">
                <span>thomastkf02@gmail.com</span>
                <span className="hidden md:inline">|</span>
                <span>(919) 672-2471</span>
                <span className="hidden md:inline">|</span>
                <span>Durham, NC</span>
                <span className="hidden md:inline">|</span>
                <a href="https://github.com/ThomasKidane" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">GitHub</a>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/thomas-kidane/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-4 rounded-full hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://codeforces.com/profile/SummitClimbingDevil"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-4 rounded-full hover:scale-110 transition-transform"
                aria-label="Codeforces"
              >
                <Trophy className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/thenewbusinessman/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-4 rounded-full hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
            <p className="text-xl md:text-2xl text-white/[0.8] mt-4">Computer Science & Mathematics at Duke University</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
            <div className="text-left text-white/[0.95]">
              <div className="mb-2">
                <span className="font-semibold text-2xl">Duke University</span>
              </div>
              <div className="mb-2">B.S, Computer Science & B.A, Mathematics</div>
              <div className="mb-2 text-white/[0.8]">
                <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Computer Architecture, Linear Algebra, Advanced Multivariable Calculus, Advanced Probability, Advanced Linear Algebra, Operating Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 min-h-[24rem]">
          {/* Timeline Navigation */}
          <div className="md:w-1/4 h-full flex md:flex-col items-center justify-center md:justify-between gap-y-0 sticky md:top-32 top-0 z-20 relative">
            {/* Vertical line for timeline, only between dots */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 via-green-400 to-green-400 opacity-60 z-0" />
            <a href="#exp-duke" className="timeline-dot group flex flex-col items-center focus:outline-none z-10 relative">
              <span className="w-4 h-4 bg-purple-400 rounded-full mb-2 group-hover:scale-125 transition-transform border-2 border-white" />
              <span className="text-white/[0.85] font-semibold group-hover:text-purple-300 transition-colors">Duke University</span>
            </a>
            <a href="#exp-dunyatech" className="timeline-dot group flex flex-col items-center focus:outline-none z-10 relative">
              <span className="w-4 h-4 bg-blue-400 rounded-full mb-2 group-hover:scale-125 transition-transform border-2 border-white" />
              <span className="text-white/[0.85] font-semibold group-hover:text-blue-300 transition-colors">Dunyatech</span>
            </a>
            <a href="#exp-byt" className="timeline-dot group flex flex-col items-center focus:outline-none z-10 relative">
              <span className="w-4 h-4 bg-green-400 rounded-full mb-2 group-hover:scale-125 transition-transform border-2 border-white" />
              <span className="text-white/[0.85] font-semibold group-hover:text-green-300 transition-colors">BYT Technologies</span>
            </a>
          </div>
          {/* Experience Cards */}
          <div className="md:w-3/4 flex flex-col gap-12">
            {/* Duke University */}
            <div id="exp-duke" className="glass-card rounded-3xl p-8 scroll-mt-32">
              <div className="flex items-center mb-2">
                <a href="https://duke.edu" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors flex items-center gap-1">Duke University <ArrowUpRight className="inline w-5 h-5 text-purple-300" /></a>
                <span className="ml-3 text-white/[0.7]">May 2025 – Present</span>
              </div>
              <div className="mb-2 text-white/[0.85]">Research Assistant under <a href="https://sites.google.com/view/fan-wei/home" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">Prof. Fan Wei</a></div>
              <ul className="list-disc ml-6 mt-2 text-white/[0.85] space-y-1">
                <li>Architected and deployed a distributed computing system from the ground up, scaling processing from a single machine to a 15+ computer cluster to solve major computational bottlenecks.</li>
                <li>Drove performance by migrating the codebase to C++ (slashing computation time by 270%) and re-engineering a core algorithm (achieving a 350% speed increase).</li>
                <li>Developed a comprehensive test suite to validate performance benchmarks and ensure system stability throughout the refactoring and migration process.</li>
              </ul>
            </div>
            Dunyatech
            <div id="exp-dunyatech" className="glass-card rounded-3xl p-8 scroll-mt-32">
              <div className="flex items-center mb-2">
                <a href="https://dunyatech.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors flex items-center gap-1">Dunyatech Technology <ArrowUpRight className="inline w-5 h-5 text-blue-300" /></a>
                <span className="ml-3 text-white/[0.7]">Feb 2023 – Apr 2024</span>
              </div>
              <div className="mb-2 text-white/[0.85]">Linux and ML Instructor</div>
              <ul className="list-disc ml-6 mt-2 text-white/[0.85] space-y-1">
                <li>Developed and authored 60+ training modules on Bash, Python, and Machine Learning (Scikit-learn, NumPy, Pandas), establishing the primary curriculum for new developers.</li>
                <li>Successfully onboarded and trained over 30 new developers, increasing team productivity and standardizing internal development practices.</li>
              </ul>
            </div>
            {/* BYT Technologies */}
            <div id="exp-byt" className="glass-card rounded-3xl p-8 scroll-mt-32">
              <div className="flex items-center mb-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-green-300 transition-colors flex items-center gap-1">BYT Technologies</a>
                <span className="ml-3 text-white/[0.7]">Oct 2021 – May 2023</span>
              </div>
              <div className="mb-2 text-white/[0.85]">Software Engineer</div>
              <ul className="list-disc ml-6 mt-2 text-white/[0.85] space-y-1">
                <li>Architected and deployed a predictive credit rating system using Scikit-learn and MySQL, cutting manual scoring time by 70% and accelerating the loan approval process.</li>
                <li>Developed the company&apos;s core FinTech web app, managing a 12-user beta launch to gather critical feedback and iterate on the product before its full release.</li>
                <li>Initiated and secured a strategic partnership with Abyssinia Bank, the 2nd largest bank in the country, to underwrite the platform&apos;s financial services.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
            <div className="space-y-8 text-left text-white/[0.95]">
              <div>
                <div className="font-semibold text-xl">AI-Driven Video Ingestion and Labeling System <span className="text-white/[0.7]">C++, Qt</span></div>
                <ul className="list-disc ml-6 mt-2 text-white/[0.85] space-y-1">
                  <li>Architected and built a cross-platform desktop application with C++ and Qt, automating video ingestion.</li>
                  <li>Integrated an AI-powered backend that harnessed the OpenAI API to auto-generate descriptive metadata and indexed all content within an SQLite database for instant search and retrieval.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-xl">Library Resource Access Tool <span className="text-white/[0.7]">Django, PostgreSQL, Telegram API</span></div>
                <ul className="list-disc ml-6 mt-2 text-white/[0.85] space-y-1">
                  <li>Built and deployed a unified platform, integrating a Django web app with a Telegram chatbot, to streamline library resource access for 200+ students.</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-xl">No-Code Telegram Marketplace <span className="text-white/[0.7]">Node.js, Express.js, ElephantSQL</span></div>
                <ul className="list-disc ml-6 mt-2 text-white/[0.85] space-y-1">
                  <li>Developed a platform enabling non-technical business owners to launch custom Telegram e-commerce bots with integrated payments, inventory, and delivery.</li>
                  <li>Utilized Node.js for backend logic and ElephantSQL (PostgreSQL) for scalable data storage and management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Skills & Interests Section */}
      <section id="skills" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Skills & Interests</h2>
            <div className="text-left text-white/[0.95]">
              <div className="mb-2"><span className="font-semibold">Skills:</span> Python, C++, Javascript, Pandas, Numpy, Next.js</div>
              <div className="mb-2"><span className="font-semibold">Interests:</span> Math Olympiad (Ethiopian Math Olympiad), Competitive Programmer (Expert on Codeforces, honorable mention in regional ICPC competition), Making Comedy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-white/[0.6]">© 2025 Thomas Kidane. Crafted with passion and code.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
