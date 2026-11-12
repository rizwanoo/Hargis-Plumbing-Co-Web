import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES, SERVICE_AREAS } from '../data/businessData';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { Award, ShieldCheck, Wrench, MapPin, CheckCircle } from 'lucide-react';

interface AboutWorkPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const AboutWorkPage: React.FC<AboutWorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. HERO / EDITORIAL ESSAY INTRO */}
      <section className="bg-[#FFFDF7] py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2457F5] mb-4">
                <Award className="w-4 h-4 text-[#F3C75B]" />
                <span>Our Philosophy & Credential</span>
              </div>
              <h1 className="font-['Barlow'] font-extrabold text-4xl sm:text-6xl text-[#27343D] uppercase tracking-tight leading-[1.05] mb-6">
                Service You Can Trust. Master Plumber Standards.
              </h1>
              <p className="text-base sm:text-lg text-[#27343D]/80 leading-relaxed font-normal mb-6">
                Hargis Plumbing Co. was established around a bedrock principle: delivering dependable, code-compliant,
                and meticulous plumbing services to Northwest Arkansas properties without cutting corners or obscuring costs.
              </p>
              <p className="text-sm sm:text-base text-[#27343D]/75 leading-relaxed font-normal mb-8">
                Operating with official Master Plumber license <strong className="text-[#27343D] font-semibold">MP7489</strong>,
                we take immense pride in every solder joint, pipe alignment, valve replacement, and fixture install. When you call Hargis Plumbing Co.,
                you work directly with a licensed professional who understands residential and commercial systems inside and out.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <BorderlessCTA
                  label="Contact for a Free Estimate"
                  variant="royal"
                  size="md"
                  onClick={() => onNavigate('contact')}
                />
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-[#17B9B0] hover:text-[#2457F5] transition-colors"
                >
                  Visit Official Facebook Page ↗
                </a>
              </div>
            </div>

            {/* Asymmetrical Image */}
            <div className="lg:col-span-5 relative overflow-hidden shadow-2xl">
              <img
                src={IMAGES.craftPiping}
                alt="Master Plumber hands soldering copper pipe fittings"
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#F3C75B] block mb-1">
                  Master Plumber MP7489
                </span>
                <p className="text-xs text-white/90">
                  Precision mechanical craftsmanship, exact pipe leveling, and long-lasting solder joints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MASTER PLUMBER CREDENTIAL DEEP DIVE (Deep Slate #27343D Background) */}
      <section className="bg-[#27343D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#17B9B0] block mb-2">
              The Highest Plumbing Credential in Arkansas
            </span>
            <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
              What Does Master Plumber MP7489 Mean for You?
            </h2>
            <p className="text-sm sm:text-base text-white/80 mt-4 leading-relaxed font-normal">
              Not all plumbers hold a Master Plumber license. In Arkansas, obtaining and maintaining a Master Plumber license
              requires rigorous verified journeyman trade experience, passing state board comprehensive examinations on Arkansas Plumbing Code,
              and demonstrating mastery of water supply hydraulics, venting, sanitation, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/10">
            <div className="space-y-3">
              <div className="text-2xl font-['Barlow'] font-bold text-[#F3C75B]">
                01. Rigorous Arkansas Licensing
              </div>
              <h3 className="text-lg font-['Barlow'] font-semibold text-white uppercase">
                Code Compliance & Safety
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Licensed under Arkansas MP7489, ensuring all installations, venting, and pressure protections adhere to the latest state safety regulations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-2xl font-['Barlow'] font-bold text-[#17B9B0]">
                02. Direct Accountability
              </div>
              <h3 className="text-lg font-['Barlow'] font-semibold text-white uppercase">
                No Salesmen or Middlemen
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                You speak directly to the licensed professional handling your project. Clear communication, accurate diagnostic assessments, and no artificial sales pitches.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-2xl font-['Barlow'] font-bold text-white">
                03. Free Honest Estimates
              </div>
              <h3 className="text-lg font-['Barlow'] font-semibold text-white uppercase">
                Transparent Upfront Quotes
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We believe in honest trade pricing. You receive clear details of the work required before any wrench touches your pipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRAFTSMANSHIP & PROJECT VISUAL STORYTELLING (Open Asymmetrical Gallery, NO Boxed Cards) */}
      <section className="bg-[#FFFDF7] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest text-[#2457F5] uppercase block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl text-[#27343D] uppercase tracking-tight leading-tight">
              Our Workmanship in Focus.
            </h2>
            <p className="text-sm sm:text-base text-[#27343D]/80 mt-4 leading-relaxed font-normal">
              Plumbing is both an exacting trade and an architectural discipline. We treat every mechanical room,
              under-sink manifold, and luxury bathroom trim with genuine pride in tradecraft.
            </p>
          </div>

          {/* Open Gallery Spread */}
          <div className="space-y-16">
            {/* Top Spread: Full-width Dual Editorial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 overflow-hidden shadow-xl">
                <img
                  src={IMAGES.hero}
                  alt="Mechanical room manifold with precision copper piping"
                  className="w-full h-80 sm:h-[460px] object-cover object-center"
                />
              </div>
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2457F5]">
                  Infrastructure & Manifolds
                </span>
                <h3 className="font-['Barlow'] font-bold text-2xl text-[#27343D] uppercase">
                  Engineered Water Distribution
                </h3>
                <p className="text-sm text-[#27343D]/75 leading-relaxed">
                  Clean parallel copper manifolds with dedicated individual isolation shutoffs.
                  Engineered for balanced flow rates and effortless future maintenance.
                </p>
                <div className="pt-2">
                  <BorderlessCTA
                    label="Schedule Free Estimate"
                    variant="royal"
                    size="sm"
                    onClick={() => onNavigate('contact')}
                  />
                </div>
              </div>
            </div>

            {/* Second Spread: Inverted Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-black/5">
              <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#17B9B0]">
                  Thermal Efficiency
                </span>
                <h3 className="font-['Barlow'] font-bold text-2xl text-[#27343D] uppercase">
                  Tankless Water Heater Installation
                </h3>
                <p className="text-sm text-[#27343D]/75 leading-relaxed">
                  Continuous on-demand hot water units securely mounted with code-certified gas line sizing,
                  expansion tank, and clean condensation drainage.
                </p>
                <div className="pt-2">
                  <BorderlessCTA
                    label="View Water Heater Details"
                    variant="aqua"
                    size="sm"
                    onClick={() => onNavigate('services', 'water-heaters')}
                  />
                </div>
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2 overflow-hidden shadow-xl">
                <img
                  src={IMAGES.waterHeater}
                  alt="High-efficiency tankless water heater installation"
                  className="w-full h-80 sm:h-[460px] object-cover object-center"
                />
              </div>
            </div>

            {/* Third Spread: Luxury Bath & Kitchen */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-black/5">
              <div className="lg:col-span-7 overflow-hidden shadow-xl">
                <img
                  src={IMAGES.kitchenBath}
                  alt="Luxury brass bathroom faucet and architectural sink"
                  className="w-full h-80 sm:h-[460px] object-cover object-center"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F3C75B]">
                  Finish Quality
                </span>
                <h3 className="font-['Barlow'] font-bold text-2xl text-[#27343D] uppercase">
                  High-End Fixture Trims & Remodeling
                </h3>
                <p className="text-sm text-[#27343D]/75 leading-relaxed">
                  Pristine installation of high-end brass and matte black fixtures, undermount basins,
                  freestanding tubs, and custom shower valves with zero marring or leaks.
                </p>
                <div className="pt-2">
                  <BorderlessCTA
                    label="Explore Remodel Trims"
                    variant="dark"
                    size="sm"
                    onClick={() => onNavigate('services', 'kitchen-bath')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NORTHWEST ARKANSAS COMMITMENT (Soft Mint #E7F5EF Background) */}
      <section className="bg-[#E7F5EF] py-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest text-[#17B9B0] uppercase block mb-2">
              Our Community
            </span>
            <h2 className="font-['Barlow'] font-bold text-3xl sm:text-4xl text-[#27343D] uppercase tracking-tight">
              Proud to Serve Our NWA Neighbors.
            </h2>
            <p className="text-sm text-[#27343D]/80 mt-2 leading-relaxed">
              We live, work, and raise our families right here in Northwest Arkansas. We value every ongoing relationship with our local homeowners and property managers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-black/10">
            {SERVICE_AREAS.map((a) => (
              <div key={a.name} className="flex flex-col">
                <span className="font-['Barlow'] font-bold text-xl text-[#27343D] uppercase">
                  {a.name}, AR
                </span>
                <span className="text-xs font-semibold text-[#2457F5] mt-1">{a.county}</span>
                <span className="text-xs text-[#27343D]/70 mt-2 leading-relaxed">{a.highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="text-xs text-[#27343D]/70 uppercase tracking-widest font-semibold">
              Hargis Plumbing Co. · Master Plumber MP7489 · Call or Text (870) 820-8096
            </div>
            <BorderlessCTA
              label="Request Free In-Person or Phone Estimate →"
              variant="royal"
              size="md"
              onClick={() => onNavigate('contact')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
