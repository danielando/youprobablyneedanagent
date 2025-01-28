import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AgentCardProps {
  id: string
  name: string
  description: string
  image: string
  category: string
  pricing: "Free" | "Paid"
}

export default function AgentCard({ id, name, description, image, category, pricing }: AgentCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/agents/${id}`}>
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-primary">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex gap-2">
            <Badge variant="secondary">{category}</Badge>
            <Badge
              variant={pricing === "Free" ? "outline" : "default"}
              className={pricing === "Free" ? "border-accent text-accent" : "bg-accent text-white"}
            >
              {pricing}
            </Badge>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

