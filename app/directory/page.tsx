'use client'
import { Bot, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

// Sample data - you'll replace this with real data later
const categories = [
  "Productivity",
  "Development",
  "Writing",
  "Research",
  "Data Analysis",
  "Customer Service",
  "Marketing",
]

// Add pricing type enum
const PricingType = {
  FREE: "Free",
  FREEMIUM: "Freemium",
  SUBSCRIPTION: "Subscription",
  ENTERPRISE: "Enterprise",
  ONCE_OFF: "Once Off"
} as const

const agents = [
  {
    id: "1",
    name: "CodeCopilot Pro",
    description: "Advanced coding assistant with real-time suggestions and code review capabilities.",
    category: "Development",
    pricingType: PricingType.FREEMIUM,
    featured: true,
  },
  {
    id: "2",
    name: "WriteWise",
    description: "AI-powered writing assistant for content creation and editing.",
    category: "Writing",
    pricingType: PricingType.SUBSCRIPTION,
    featured: true,
  },
  {
    id: "3",
    name: "DataSense AI",
    description: "Intelligent data analysis and visualization assistant for business insights.",
    category: "Data Analysis",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "4",
    name: "ProductivityPro",
    description: "Your personal productivity coach for task management and time optimization.",
    category: "Productivity",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "5",
    name: "ResearchMate",
    description: "Academic research assistant for literature review and citation management.",
    category: "Research",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "6",
    name: "CustomerCare AI",
    description: "24/7 customer service assistant with multi-language support and sentiment analysis.",
    category: "Customer Service",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "7",
    name: "MarketingGenius",
    description: "AI-powered marketing strategy and content optimization assistant.",
    category: "Marketing",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "8",
    name: "BugHunter",
    description: "Automated debugging assistant that helps identify and fix code issues.",
    category: "Development",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "9",
    name: "ContentCraft",
    description: "Creative content generation assistant for blogs, social media, and more.",
    category: "Writing",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "10",
    name: "AnalyticsPro",
    description: "Advanced analytics assistant for data-driven decision making.",
    category: "Data Analysis",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "11",
    name: "TaskMaster",
    description: "Smart project management assistant with automated workflow optimization.",
    category: "Productivity",
    pricingType: PricingType.SUBSCRIPTION,
  },
  {
    id: "12",
    name: "ScholarBot",
    description: "Research assistant specialized in academic paper analysis and synthesis.",
    category: "Research",
    pricingType: PricingType.SUBSCRIPTION,
  }
]

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const router = useRouter()

  // Filter agents based on search query and selected category
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = !selectedCategory || agent.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-8 flex justify-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Bot className="h-16 w-16 text-accent" />
              </Link>
            </div>
            <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
              Copilot Agent Directory
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Discover, Compare, and Implement High-Impact Copilot Agents
            </p>
            <p className="mt-2 text-lg text-muted-foreground">
              Discover the perfect Copilot agent for your needs
            </p>
          </div>

          {/* Featured Agents */}
          <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Featured Agents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {agents.filter(agent => agent.featured).map((agent) => (
                <Card key={agent.name} className="flex flex-col border-accent/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <div>
                        <span className="flex items-center gap-2">
                          {agent.name}
                          <Badge className="bg-accent/10 text-accent">
                            Featured
                          </Badge>
                        </span>
                      </div>
                      <Badge variant="outline">
                        {agent.pricingType}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{agent.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge variant="secondary">{agent.category}</Badge>
                    <Button 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-accent hover:text-white transition-colors"
                      onClick={() => router.push(`/directory/agent/${agent.id}`)}
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search agents..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                key="all"
                variant="secondary"
                className={`rounded-full transition-colors ${
                  !selectedCategory 
                    ? 'bg-accent text-white hover:bg-accent/90' 
                    : 'hover:bg-accent hover:text-white'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="secondary"
                  className={`rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'hover:bg-accent hover:text-white'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <Card key={agent.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{agent.name}</span>
                      <Badge variant="outline">
                        {agent.pricingType}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{agent.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge variant="secondary">{agent.category}</Badge>
                    <Button 
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-accent hover:text-white transition-colors"
                      onClick={() => router.push(`/directory/agent/${agent.id}`)}
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground py-12">
                <p>No agents found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="py-8 bg-secondary mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex gap-6">
              <Link 
                href="/pricing" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                Agent Listing Pricing
              </Link>
              <Link 
                href="/directory" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                Agent Directory
              </Link>
            </nav>
            <p className="text-center text-secondary-foreground">
              © 2025 You Probably Need an Agent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 