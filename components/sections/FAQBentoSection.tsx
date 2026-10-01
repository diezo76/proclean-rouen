import Image from 'next/image';
import { parseInlineHtml } from '@/lib/parseInlineHtml';

interface FAQBentoItem {
  question: string;
  answer: string;
}

interface FAQBentoSectionProps {
  title: string;
  items: FAQBentoItem[];
  image?: string;
  imageAlt?: string;
  imagePortrait?: boolean;
}

function FAQCard({ question, answer }: FAQBentoItem) {
  return (
    <div className="border border-white/20 rounded-xl p-6">
      <h3 className="font-display text-lg font-semibold text-white mb-3">
        {question}
      </h3>
      <p className="text-sm text-dark-text-secondary leading-relaxed">
        {parseInlineHtml(answer)}
      </p>
    </div>
  );
}

export default function FAQBentoSection({
  title,
  items,
  image,
  imageAlt = '',
  imagePortrait = false,
}: FAQBentoSectionProps) {
  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);

  return (
    <section className="bg-dark-bg section-padding">
      <div className="container-main">
        {/* Titre */}
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-2">
          {title}
        </h2>

        {/* PROCLEAN avec déco */}
        <div className="flex flex-col items-center mb-12">
          <span className="font-display text-base font-bold tracking-[0.2em] text-white uppercase">
            PROCLEAN
          </span>
          <div className="w-12 h-1 bg-proclean-blue rounded-full mt-2" />
          <div className="w-2 h-2 bg-proclean-green rounded-full mt-1.5" />
        </div>

        {/* Grille bento : 3 colonnes sur desktop */}
        <div
          className={`grid grid-cols-1 gap-6 items-start ${
            image ? 'lg:grid-cols-[1fr_300px_1fr]' : 'lg:grid-cols-2'
          }`}
        >
          {/* Colonne gauche : 3 FAQ */}
          <div className="flex flex-col gap-6">
            {leftItems.map((item, idx) => (
              <FAQCard key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>

          {/* Image centrale portrait */}
          {image && (
            <div className="hidden lg:flex items-center justify-center h-full">
              <div className="relative w-[280px] h-[420px] rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className={`object-cover ${imagePortrait ? 'object-center' : 'object-[78%_center]'}`}
                  sizes="280px"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Colonne droite : 3 FAQ */}
          <div className="flex flex-col gap-6">
            {rightItems.map((item, idx) => (
              <FAQCard key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
