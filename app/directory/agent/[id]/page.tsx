import { Metadata } from 'next';
import AgentDetails from '@/src/components/AgentDetails';

export const runtime = 'edge';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Agent Details - ${params.id}`,
  };
}

export default function AgentPage({ params }: Props) {
  return <AgentDetails id={params.id} />;
} 