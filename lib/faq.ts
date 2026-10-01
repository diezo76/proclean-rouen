import type { ContentBlock } from '@/types';

export function isFAQHeading(heading: string): boolean {
  const lower = heading.toLowerCase();
  return lower.includes('foire') && lower.includes('questions');
}

// Vrai si ContentSections rendra un bloc FAQ à image (FAQBentoSection) pour ces sections.
export function hasFAQBento(sections: ContentBlock[]): boolean {
  return sections.some((block, idx) => {
    if (!isFAQHeading(block.heading)) return false;
    if (block.paragraphs.length > 0) return true;
    const next = sections[idx + 1];
    return Boolean(next && /^\d+\.\s/.test(next.heading));
  });
}
