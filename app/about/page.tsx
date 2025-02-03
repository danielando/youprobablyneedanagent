import { Bot, Linkedin, Youtube, Twitter, Cloud } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Bot className="h-16 w-16 text-accent" />
              </Link>
            </div>
            <h1 className="text-4xl font-extrabold text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-none">
              Who&apos;s Behind This
            </h1>
          </div>

          {/* Content - Single Column */}
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden bg-accent/5 mb-6">
              <img 
                src="/daniel-anderson.jpg" 
                alt="Daniel Anderson"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Bio */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Daniel Anderson <span className="text-accent">(Microsoft MVP)</span>
              </h2>
              
              {/* Social Icons */}
              <div className="flex gap-4 mb-12 justify-center">
                <Link 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://youtube.com/@yourchannel" 
                  target="_blank"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://x.com/yourhandle" 
                  target="_blank"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://bsky.app/profile/yourprofile" 
                  target="_blank"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Cloud className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  A Microsoft MVP (Copilot and Microsoft 365) and strategist specializing in enterprise-scale digital businesses transformation. I help organizations harness SharePoint and Copilot as strategic assets, delivering measurable productivity gains and competitive advantages.
                </p>

                <p className="mb-6 font-medium text-primary">
                  Proven expertise in:
                </p>

                <ul className="mb-8 list-none pl-0 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Complex SharePoint architectures that drive operational excellence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Strategic Copilot implementation for tangible business outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Enterprise-wide digital workplace innovation</span>
                  </li>
                </ul>

                <p>
                  Partner with me to turn Microsoft&apos;s most powerful tools into your organization&apos;s secret weapons for sustainable growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Home"
              >
                <Bot className="h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                Who&apos;s Behind This
              </Link>
              <Link 
                href="/about-site" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                About This Site
              </Link>
              <a 
                href="https://tally.so/r/mRbveP"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
            <p className="text-center text-secondary-foreground">
              © 2025 You Probably Need an Agent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 