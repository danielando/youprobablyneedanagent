import ConvertKitForm from "./components/ConvertKitForm"
import { Bot } from "lucide-react"

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
            Discover and explore AI-powered assistants to boost your productivity. Coming soon!
          </p>
          <div className="mt-10">
            <ConvertKitForm />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Be the first to know when we launch. No spam, ever.</p>
        </div>
      </main>
      <footer className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-secondary-foreground">
            © 2024 You Probably Need an Agent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

