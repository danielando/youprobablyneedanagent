import { Bot } from "lucide-react"
import Link from "next/link"

export default function AboutSite() {
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
              About You Probably Need an Agent
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl mb-12 text-center">
              The curated directory that helps businesses and individuals find, compare, and implement the best Copilot Agents—faster and with confidence.
            </p>

            <p className="mb-8">
              AI-powered Copilot Agents are transforming the way we work, making tasks more efficient and automating workflows. But with so many options available, finding the right one can feel overwhelming. You Probably Need an Agent simplifies the process, surfacing only the most effective and reliable agents for both business operations and personal productivity.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Why We Exist
            </h2>
            <p className="mb-8">
              Finding the right Copilot Agent shouldn't require hours of research. Too many directories list every tool available, leaving users with too much choice and not enough clarity. We take a curated, user-driven approach so you can discover, compare, and implement solutions without the guesswork.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              How It Works
            </h2>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                Discover curated Copilot Agents designed to improve efficiency
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                Compare options easily with clear insights and user feedback
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✅</span>
                Implement confidently with guidance tailored to your needs
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Who It&apos;s For
            </h2>
            <ul className="list-disc pl-6 mb-8">
              <li>Business Leaders & Teams looking to automate workflows and enhance collaboration</li>
              <li>Entrepreneurs & Solopreneurs seeking AI-driven efficiency tools</li>
              <li>Tech Enthusiasts & Productivity Hackers exploring ways to optimize their daily tasks</li>
            </ul>

            <p className="text-lg mt-8">
              Whether you're looking to streamline processes, boost productivity, or integrate AI into your daily workflow, You Probably Need an Agent helps you find the right Copilot, at the right time.
            </p>
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