'use client';

import Link from 'next/link';
import { Phone, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import type { CityData } from '@/data/cities';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import FAQSchema from '@/components/schema/FAQSchema';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import FAQSection from '@/components/sections/FAQSection';

export default function VilleTemplate({ city }: { city: CityData }) {
  return (
    <article>
      <LocalBusinessSchema />
      <FAQSchema items={city.faq} />

      {/* HERO compact */}
      <section className="bg-navy pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="container-main text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm mb-8">
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[13px] text-white/70 font-medium">
                5/5 sur Google — 530+ interventions
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.05}>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Nettoyage professionnel à {city.name}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto">
              {city.heroSubtitle}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/devis-gratuit-rouen"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-proclean-blue to-[#1976D2] text-white text-base font-bold px-9 py-[18px] rounded-xl shadow-[0_4px_24px_rgba(33,150,243,0.35)] hover:shadow-[0_6px_32px_rgba(33,150,243,0.45)] transition-all"
              >
                Devis Gratuit
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phoneFormatted}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/[0.06] border border-white/15 text-white text-base font-semibold px-8 py-[18px] rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="section-padding">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy dark:text-dark-text text-center mb-12">
              Nos services à {city.name}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {city.services.map((svc, idx) => (
              <AnimateOnScroll key={svc.href} delay={idx * 0.05}>
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full p-6 rounded-2xl border border-gray-border/50 dark:border-gray-border/10 bg-white dark:bg-dark-bg hover:border-proclean-blue/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-display font-semibold text-navy dark:text-dark-text mb-2 group-hover:text-proclean-blue transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-text dark:text-dark-text-secondary leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  <span className="mt-4 text-sm font-medium text-proclean-blue inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROCLEAN À [VILLE] — contenu unique */}
      <section className="section-padding bg-gray-bg dark:bg-dark-bg-secondary">
        <div className="container-main max-w-3xl">
          <AnimateOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy dark:text-dark-text text-center mb-8">
              ProClean à {city.name}
            </h2>
          </AnimateOnScroll>

          {city.description.map((paragraph, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 0.05}>
              <p className="text-gray-text dark:text-dark-text-secondary leading-relaxed mb-5">
                {paragraph}
              </p>
            </AnimateOnScroll>
          ))}

          {/* Quartiers */}
          <AnimateOnScroll delay={0.15}>
            <div className="mt-8">
              <h3 className="font-display font-semibold text-navy dark:text-dark-text mb-4">
                Quartiers desservis à {city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.quartiers.map((q) => (
                  <span
                    key={q}
                    className="px-3 py-1.5 text-sm rounded-full bg-white border border-gray-border/50 text-navy dark:bg-dark-bg dark:border-gray-border/10 dark:text-dark-text"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* VILLES VOISINES */}
      <section className="section-padding">
        <div className="container-main text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy dark:text-dark-text mb-4">
              On intervient aussi autour de {city.name}
            </h2>
            <p className="text-gray-text dark:text-dark-text-secondary mb-8">
              {city.name} et toute la métropole rouennaise, sans frais de déplacement.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {city.villesVoisines.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.slug}`}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-proclean-blue/20 text-proclean-blue hover:bg-proclean-blue/5 transition-colors"
                >
                  {v.name}
                </Link>
              ))}
              <Link
                href="/entreprise-nettoyage-rouen"
                className="px-4 py-2 text-sm font-medium rounded-full border border-proclean-blue/20 text-proclean-blue hover:bg-proclean-blue/5 transition-colors"
              >
                Toute la métropole
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection heading={`Questions fréquentes — ${city.name}`} items={city.faq} />

      {/* CTA FINAL */}
      <section className="relative bg-cta-gradient overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-main section-padding relative z-10 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Un devis gratuit pour {city.name}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Appelez-nous ou remplissez le formulaire. On vous répond sous 24h.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/devis-gratuit-rouen"
                className="inline-flex items-center gap-2 bg-white text-proclean-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white/90 transition-all"
              >
                Devis Gratuit <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-6 py-4 text-white font-medium hover:text-white/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </article>
  );
}
