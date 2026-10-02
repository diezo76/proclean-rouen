import { buildGraph } from '@/lib/schema';

// Un seul bloc JSON-LD par page. Les données viennent toutes de sources statiques du dépôt ;
// « < » est échappé pour qu'aucun texte ne puisse refermer la balise <script>.
export default function JsonLd({ nodes }: { nodes: Record<string, unknown>[] }) {
  const json = JSON.stringify(buildGraph(nodes)).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
