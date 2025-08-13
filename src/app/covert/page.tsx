import Link from 'next/link'
import Image from 'next/image'
import { Download, Play, Shield, Zap, ArrowRight, PlugZap, HardDrive, Pause, RefreshCcw } from 'lucide-react'

const DOWNLOAD_URL = 'https://github.com/ThomasKidane/covert-public-releases/releases/download/1.0/Covert-1.0.0.dmg'
const VIDEO_URL = process.env.NEXT_PUBLIC_COVERT_DEMO_URL || '/covert/demo.mp4'

export default function CovertLandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-300/30 blur-2xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-blue-100/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/covert" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-blue-900">
            <Image src="/covert/logo.svg" alt="Covert logo" width={28} height={28} priority />
            <span>Covert</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-blue-900/80">
            <Link href="#features" className="hover:text-blue-900 transition">Features</Link>
            <Link href="#how" className="hover:text-blue-900 transition">How it works</Link>
            <Link href="#privacy" className="hover:text-blue-900 transition">Privacy</Link>
            <Link href="#install" className="hover:text-blue-900 transition">Install</Link>
          </nav>
          <Link href={DOWNLOAD_URL} className="shiny-btn inline-flex items-center gap-2 px-4 py-2 text-sm">
            <Download size={18} />
            <span>Download</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-blue-900 shadow-sm ring-1 ring-blue-100">
              <Zap size={14} />
              Fast, private iPhone photo & video backup for Mac
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
              Covert — Effortless transfers. Universal formats. Fully local.
            </h1>
            <p className="text-blue-900/80 text-lg leading-relaxed">
              Plug in your iPhone, pick a folder, and click once. Covert downloads your latest shots, converts HEIC → JPG and MOV → MP4, and keeps your library tidy — one file at a time — for maximum reliability.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href={DOWNLOAD_URL} className="shiny-btn inline-flex items-center gap-2 px-5 py-3 text-base">
                <Download size={18} />
                Download for macOS
              </Link>
              <Link href="#features" className="btn-secondary inline-flex items-center gap-2 px-5 py-3 text-base">
                <Play size={18} />
                See features
              </Link>
            </div>
            <p className="text-xs text-blue-900/60">Works offline. Your files never leave your Mac.</p>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl bg-black/60 shadow-xl ring-1 ring-blue-100">
              <video
                src={VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                disablePictureInPicture
                className="h-full w-full object-cover pointer-events-none select-none"
              />
            </div>
            <div className="absolute -inset-x-6 -bottom-6 -top-6 -z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">Bold features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Zap, title: 'One‑click workflow', desc: 'Transfer & Convert in a single action.' },
            { icon: HardDrive, title: 'Automatic conversion', desc: 'HEIC → JPG, MOV → MP4 (H.264/AAC).' },
            { icon: RefreshCcw, title: 'Smart auto‑backup', desc: 'Pick a “From date”; only new items are processed.' },
            { icon: Shield, title: 'Duplicate‑safe', desc: 'Strictly sequential processing to avoid spikes.' },
            { icon: PlugZap, title: 'Visible progress', desc: 'Live counts and a progress bar for each file.' },
            { icon: Pause, title: 'Transfer controls', desc: 'Pause, resume, and cancel anytime.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white/70 p-6 shadow-md ring-1 ring-blue-100">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <Icon size={20} />
              </div>
              <h3 className="text-blue-950 font-medium">{title}</h3>
              <p className="mt-1 text-blue-900/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl bg-white/70 p-6 shadow-md ring-1 ring-blue-100">
          <h4 className="text-blue-950 font-medium">Untracked folder</h4>
          <p className="mt-1 text-blue-900/80 text-sm">Older or unmatched files in the output directory are moved to an <code className="rounded bg-blue-100/60 px-1 py-0.5">untracked/</code> subfolder.</p>
          <p className="mt-2 text-blue-900/80 text-sm">Works fully offline. All transfers and conversions happen on your Mac.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">How it works</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'A tiny Swift helper talks to your iPhone via ImageCaptureCore',
            'Photos and videos are downloaded to your chosen folder',
            'Each file is validated (size stability; ffprobe checks for videos)',
            'Originals are removed after successful conversion to save space',
            'Only one file is processed at a time—no competing jobs',
          ].map((step, idx) => (
            <li key={idx} className="rounded-xl bg-white/70 p-4 shadow ring-1 ring-blue-100 text-blue-900/90">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
                {idx + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Privacy & Requirements */}
      <section id="privacy" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/70 p-6 shadow ring-1 ring-blue-100">
            <h3 className="text-xl font-semibold text-blue-950">Privacy</h3>
            <p className="mt-2 text-blue-900/80">
              100% local processing. Covert does not upload or send your media anywhere. Your files never leave your Mac.
            </p>
          </div>
          <div className="rounded-2xl bg-white/70 p-6 shadow ring-1 ring-blue-100">
            <h3 className="text-xl font-semibold text-blue-950">System requirements</h3>
            <ul className="mt-3 list-disc pl-5 text-blue-900/80 space-y-1">
              <li>macOS 12+ (Apple Silicon supported)</li>
              <li>iPhone connected via USB (unlock and “Trust this Computer”)</li>
              <li>No separate installs required — ffmpeg/ffprobe are bundled</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">Install (unsigned build)</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/70 p-6 shadow ring-1 ring-blue-100">
            <ol className="list-decimal space-y-2 pl-5 text-blue-900/80">
              <li>Download the DMG and drag Covert to Applications</li>
              <li>First open: Right‑click Covert in Applications → Open → Open</li>
              <li>Or System Settings → Privacy & Security → “Open Anyway”</li>
            </ol>
            <div className="mt-4 rounded-md bg-blue-50 p-3 text-sm text-blue-900/90 ring-1 ring-blue-100">
              Advanced users: remove quarantine
              <pre className="mt-2 overflow-x-auto rounded bg-white/80 p-3 text-xs text-blue-900 ring-1 ring-blue-100">xattr -dr com.apple.quarantine /Applications/Covert.app</pre>
            </div>
          </div>
          <div className="rounded-2xl bg-white/70 p-6 shadow ring-1 ring-blue-100">
            <h3 className="text-lg font-medium text-blue-950">Notes</h3>
            <ul className="mt-2 list-disc pl-5 text-blue-900/80 space-y-1">
              <li>If your device isn’t detected, unlock it, tap “Trust this Computer,” then hit Refresh</li>
              <li>Large videos may take time to stabilize; Covert waits until they’re ready</li>
              <li>Auto‑backup processes only new items after your selected date</li>
              <li>Already converted or untracked files won’t be re‑downloaded</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="rounded-2xl bg-white/70 p-6 shadow ring-1 ring-blue-100">
          <h3 className="text-xl font-semibold text-blue-950">Support</h3>
          <p className="mt-2 text-blue-900/80">Found an edge case or need help? Contact us and mention your macOS version, iPhone model, and steps to reproduce.</p>
          <div className="mt-4">
            <Link href="mailto:thomastkf02@gmail.com?subject=Covert%20Support" className="btn-secondary inline-flex items-center gap-2 px-5 py-3 text-base">
              Contact support
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="sticky bottom-0 z-20 border-t border-blue-100/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 items-center justify-between md:flex-row">
          <p className="text-blue-900/80 text-sm">Ready to simplify your iPhone backups?</p>
          <div className="flex items-center gap-3">
            <Link href={DOWNLOAD_URL} className="shiny-btn inline-flex items-center gap-2 px-5 py-2.5 text-sm">
              <Download size={18} />
              Download Covert for macOS
            </Link>
            <Link href="#features" className="btn-secondary inline-flex items-center gap-2 px-4 py-2.5 text-sm">
              Learn more
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


