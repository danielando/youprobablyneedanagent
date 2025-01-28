import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SmallAgentCardProps {
  id: string
  name: string
  category: string
  image: string
  pricing: "Free" | "Paid"
}

export default function SmallAgentCard({ id, name, category, image, pricing }: SmallAgentCardProps) {
  return (
    <Link href={`/agents/${id}`}>
      <Card className="overflow-hidden">
        <div className="relative h-32">
          <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
        </div>
        <CardContent className="p-3">
          <h3 className="text-base font-semibold mb-2 truncate text-primary">{name}</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{category}</Badge>
            <Badge
              variant={pricing === "Free" ? "outline" : "default"}
              className={pricing === "Free" ? "border-accent text-accent" : "bg-accent text-white"}
            >
              {pricing}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

