import { Agent } from '@/app/types/Agent';

const mockAgents: Record<string, Agent> = {
  "1": {
    id: "1",
    name: "CodeCopilot Pro",
    description: "Advanced coding assistant with real-time suggestions and code review capabilities.",
    image: "/placeholder.svg",
    category: "Development",
    industry: "Technology",
    primaryUseCase: "Code Development and Review",
    problemSolved: "Speeds up coding process and reduces bugs",
    keyFeatures: [
      "Real-time code suggestions",
      "Automated code review",
      "Multi-language support",
      "Integration with popular IDEs"
    ],
    websiteUrl: "https://github.com/features/copilot",
    pricingModel: "Freemium",
    votes: 42,
    hasVoted: false,
    rating: 4.5,
    totalRatings: 128,
  },
  "2": {
    id: "2",
    name: "WriteWise",
    description: "AI-powered writing assistant for content creation and editing.",
    image: "/placeholder.svg",
    category: "Writing",
    industry: "Content Creation",
    primaryUseCase: "Content Writing and Editing",
    problemSolved: "Improves writing quality and speeds up content creation",
    keyFeatures: [
      "Grammar and style checking",
      "Content suggestions",
      "Tone adjustment",
      "Plagiarism detection"
    ],
    websiteUrl: "https://www.writewise.ai",
    pricingModel: "Subscription",
    votes: 28,
    hasVoted: false,
    rating: 4.2,
    totalRatings: 89,
  },
  "3": {
    id: "3",
    name: "DataSense AI",
    description: "Intelligent data analysis and visualization assistant for business insights.",
    image: "/placeholder.svg",
    category: "Data Analysis",
    industry: "Business Intelligence",
    primaryUseCase: "Data Analysis and Visualization",
    problemSolved: "Simplifies complex data analysis and visualization tasks",
    keyFeatures: [
      "Automated data cleaning",
      "Interactive visualizations",
      "Predictive analytics",
      "Custom reporting"
    ],
    websiteUrl: "https://datasense.ai",
    pricingModel: "Subscription"
  },
  "4": {
    id: "4",
    name: "ProductivityPro",
    description: "Your personal productivity coach for task management and time optimization.",
    image: "/placeholder.svg",
    category: "Productivity",
    industry: "Personal Development",
    primaryUseCase: "Task and Time Management",
    problemSolved: "Optimizes personal and team productivity",
    keyFeatures: [
      "Smart task prioritization",
      "Time tracking",
      "Project templates",
      "Team collaboration"
    ],
    websiteUrl: "https://productivitypro.ai",
    pricingModel: "Subscription"
  },
  "5": {
    id: "5",
    name: "ResearchMate",
    description: "Academic research assistant for literature review and citation management.",
    image: "/placeholder.svg",
    category: "Research",
    industry: "Academia",
    primaryUseCase: "Academic Research",
    problemSolved: "Streamlines academic research and paper writing",
    keyFeatures: [
      "Literature search",
      "Citation management",
      "Paper summarization",
      "Research organization"
    ],
    websiteUrl: "https://researchmate.ai",
    pricingModel: "Subscription"
  }
};

export const getAgentById = async (id: string): Promise<Agent> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const agent = mockAgents[id];
  if (!agent) {
    throw new Error('Agent not found');
  }
  
  return agent;
}; 