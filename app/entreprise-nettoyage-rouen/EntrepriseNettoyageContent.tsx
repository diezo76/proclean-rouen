'use client';

import Link from 'next/link';
import { Phone, ArrowRight, Star, Sofa, Briefcase, Hammer, GlassWater, Trash2, Sun, Building2, CloudRain, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import FAQSchema from '@/components/schema/FAQSchema';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import FAQSection from '@/components/sections/FAQSection';
import ZoneInterventionSection from '@/components/sections/ZoneInterventionSection';
import type { FAQItem } from '@/types';

const SERVICES = [
  { icon: Sofa, title: 'Canapés & tissus', desc: 'Détachage, désinfection, rénovation de vos canapés, fauteuils et matelas.', href: '/nettoyage-canape-rouen' },
  { icon: Briefcase, title: 'Bureaux & locaux pro', desc: 'Entretien régulier ou ponctuel de vos espaces de travail.', href: '/nettoyage-bureaux-rouen' },
  { icon: Hammer, title: 'Après travaux', desc: 'Remise en état complète après chantier, rénovation ou construction.', href: '/nettoyage-apres-travaux-rouen' },
  { icon: GlassWater, title: 'Vitres & baies vitrées', desc: 'Nettoyage sans traces, intérieur et extérieur, jusqu\'à 12m de hauteur.', href: '/nettoyage-vitres-rouen' },
  { icon: Trash2, title: 'Syndrome de Diogène', desc: 'Intervention discrète et complète. Nettoyage, désinfection, évacuation.', href: '/nettoyage-diogene-rouen' },
  { icon: Sun, title: 'Terrasses & balcons', desc: 'Décapage, traitement anti-mousse et protection longue durée.', href: '/nettoyage-terrasse-rouen' },
  { icon: Building2, title: 'Immeubles & copropriétés', desc: 'Parties communes, halls, escaliers, local poubelles.', href: '/entretien-immeubles-rouen' },
  { icon: CloudRain, title: 'Toiture & façade', desc: 'Démoussage basse pression et traitement hydrofuge.', href: '/nettoyage-toiture-rouen' },
];

const WHY_US = [
  { stat: '24h', label: 'Devis gratuit', desc: 'Vous nous appelez, on vous envoie un devis détaillé sous 24h. Pas de surprise, pas de frais cachés.' },
  { stat: '530+', label: 'Interventions', desc: 'Plus de 530 chantiers réalisés à Rouen et dans la métropole. On connaît le terrain.' },
  { stat: '5/5', label: 'Google', desc: 'Note maximale sur Google. Nos clients ne laissent pas d\'avis par hasard.' },
  { stat: '0€', label: 'Frais cachés', desc: 'Le prix du devis, c\'est le prix que vous payez. Point.' },
];

const STEPS = [
  { num: '01', title: 'Vous nous contactez', desc: 'Par téléphone ou via le formulaire en ligne. On vous répond dans la journée.' },
  { num: '02', title: 'On évalue la situation', desc: 'Visite gratuite si nécessaire. On regarde, on mesure, on chiffre.' },
  { num: '03', title: 'On intervient', desc: 'À la date et à l\'heure qui vous arrangent. Matériel pro, équipe formée.' },
  { num: '04', title: 'Vous vérifiez, vous payez', desc: 'Vous inspectez le résultat. Satisfait ? Vous réglez. Pas satisfait ? On repasse.' },
];

const ZONE_CITIES = [
  'Rouen', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan', 'Bois-Guillaume', 'Canteleu',
  'Grand-Quevilly', 'Petit-Quevilly', 'Déville-lès-Rouen', 'Maromme',
  'Notre-Dame-de-Bondeville', 'Darnétal', 'Saint-Étienne-du-Rouvray',
];

const FAQ_ITEMS: FAQItem[] = [
  { question: 'Combien coûte un nettoyage professionnel à Rouen ?', answer: 'Ça dépend du service : à partir de 28€ pour un ménage d\'appartement, 60€ pour un canapé, 75€ pour une terrasse. On chiffre gratuitement avant chaque intervention.' },
  { question: 'Vous intervenez chez les particuliers et les entreprises ?', answer: 'Oui, les deux. Appartements, maisons, bureaux, commerces, immeubles, parkings. On s\'adapte à chaque situation.' },
  { question: 'Quel délai pour une intervention ?', answer: 'Devis sous 24h, intervention sous 48 à 72h en temps normal. On peut intervenir en urgence sous 24h si la situation le demande.' },
  { question: 'Quels moyens de paiement acceptez-vous ?', answer: 'Chèque, virement bancaire et espèces. On vous envoie une facture après chaque intervention.' },
  { question: 'Vous êtes assurés ?', answer: 'Oui, responsabilité civile professionnelle. En cas de problème pendant l\'intervention, vous êtes couvert.' },
];

export default function EntrepriseNettoyageContent() {
  return (
    <article>
      <LocalBusinessSchema />
      <FAQSchema items={FAQ_ITEMS} />

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
              Entreprise de nettoyage à Rouen
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto">
              Nettoyage pro pour particuliers et entreprises. Devis en 24h, intervention rapide.
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

      {/* CE QU'ON FAIT — grille 4x2 */}
      <section className="section-padding">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy dark:text-dark-text text-center mb-12">
              Ce qu&apos;on fait
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, idx) => (
              <AnimateOnScroll key={svc.href} delay={idx * 0.05}>
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full p-6 rounded-2xl border border-gray-border/50 dark:border-gray-border/10 bg-white dark:bg-dark-bg hover:border-proclean-blue/30 hover:shadow-lg transition-all duration-300"
                >
                  <svc.icon className="w-8 h-8 text-proclean-blue mb-4" />
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

      {/* POURQUOI PROCLEAN */}
      <section className="relative py-16 md:py-24 bg-navy overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(33,150,243,0.15), transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-main relative z-10">
          <AnimateOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Pourquoi <span className="text-proclean-green">ProClean</span> ?
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item, idx) => (
              <AnimateOnScroll key={item.label} delay={idx * 0.1}>
                <div className="h-full flex flex-col bg-white/5 border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="text-3xl font-extrabold text-proclean-blue leading-none mb-1">
                    {item.stat}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-4">
                    {item.label}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE */}
      <section className="section-padding bg-gray-bg dark:bg-dark-bg-secondary">
        <div className="container-main">
          <AnimateOnScroll>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy dark:text-dark-text text-center mb-12">
              Comment ça se passe
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {STEPS.map((step, idx) => (
              <AnimateOnScroll key={step.num} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-proclean-blue/10 text-proclean-blue font-display font-extrabold text-lg mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display font-semibold text-navy dark:text-dark-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-text dark:text-dark-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <ZoneInterventionSection
        paragraph="On couvre toute la métropole rouennaise. Pas de frais de déplacement."
        cities={ZONE_CITIES}
        paymentMethods="Chèque, Virement bancaire, Espèces"
      />

      {/* FAQ */}
      <FAQSection heading="Questions fréquentes" items={FAQ_ITEMS} />

      {/* CTA FINAL */}
      <section className="relative bg-cta-gradient overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-main section-padding relative z-10 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Un devis, c&apos;est gratuit et sans engagement
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
                Devis Gratuit
                <ArrowRight size={18} />
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
