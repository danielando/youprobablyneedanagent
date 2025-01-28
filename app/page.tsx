import ConvertKitForm from "./components/ConvertKitForm"
import { Bot, Cat } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Bot className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">You Probably Need an Agent</h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Discover and explore Copilot-powered assistants to boost your productivity. Coming soon!
          </p>
          <div className="mt-10">
            <ConvertKitForm />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Be the first to know when we launch. No spam, ever.</p>
          
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-center mb-4">
              <Cat className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Submit Your Agent</h2>
            <p className="mt-3 text-muted-foreground">
              Have an amazing Copilot agent? We&apos;d love to feature it in our directory.
            </p>
            <a 
              href="https://tally.so/r/wvJAB0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-accent hover:text-accent/80 transition-colors"
            >
              Submit your agent for review →
            </a>
          </div>
        </div>
      </main>
      <footer className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-secondary-foreground">
            © 2025 You Probably Need an Agent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

