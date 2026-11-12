import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES, VERIFIED_SERVICES, SERVICE_AREAS } from '../data/businessData';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { Award, CheckCircle2, Phone, MessageSquare, MapPin, Wrench, Shield, Droplets } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-28 pb-20">
        {/* Background Image extending behind the navbar */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Hargis Plumbing Co. Professional Master Plumber Craftsmanship"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle local contrast scrim preserving natural photo colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full py-12">
          <div className="max-w-3xl">
            {/* Quiet Credential Lead-in (No pill badge) */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#F3C75B] mb-4">
              <Award className="w-4 h-4 text-[#F3C75B]" />
              <span>Master Plumber · License MP7489</span>
              <span className="text-white/40">·</span>
              <span className="text-white/80">Northwest Arkansas</span>
            </div>

            {/* Main Headline in Barlow 800 */}
            <h1 className="font-['Barlow'] font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] uppercase mb-6 [text-wrap:balance]">
              Service You Can Trust.
              <span className="block text-[#17B9B0] mt-1">Quality You Can Count On.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal mb-8 max-w-2xl">
              Reliable plumbing services for Northwest Arkansas. Professional workmanship, honest service,
              and free estimates from a licensed Master Plumber.
            </p>

            {/* CTAs (Borderless Transparent) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-2">
              <BorderlessCTA
                label="Request A Free Estimate"
                variant="gold"
                size="lg"
                arrowType="right"
                onClick={() => onNavigate('contact')}
              />

              <BorderlessCTA
                label="Call or Text (870) 820-8096"
                variant="light"
                size="lg"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                arrowType="upRight"
              />
            </div>

            {/* Key Trust Highlights (Natural text row, no pill badges) */}
            <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#17B9B0] shrink-0" />
                <span>Free Estimates Guaranteed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#17B9B0] shrink-0" />
                <span>Bentonville, Rogers, Springdale, Fayetteville</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#17B9B0] shrink-0" />
                <span>Direct Master Plumber Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION & PHILOSOPHY (Full-width Warm White Section) */}
      <section className="bg-[#FFFDF7] py-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="text-xs font-bold tracking-widest text-[#2457F5] uppercase mb-3">
                About Hargis Plumbing Co.
              </div>
              <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl text-[#27343D] tracking-tight leading-tight uppercase mb-6 [text-wrap:balance]">
                Honest, Dependable Plumbing for Northwest Arkansas Homes & Businesses.
              </h2>
              <div className="space-y-4 text-base text-[#27343D]/80 leading-relaxed font-normal">
                <p>
                  At Hargis Plumbing Co., our founding mission is simple: provide exceptional plumbing craftsmanship
                  grounded in genuine integrity and trust. We believe every homeowner, property manager, and local
                  business owner deserves transparent communication and code-compliant plumbing solutions without high-pressure sales.
                </p>
                <p>
                  Led by Arkansas Master Plumber MP7489, every service call—from a tankless water heater upgrade in
                  Bentonville to emergency pipe repair in Fayetteville—is executed with meticulous precision. We treat your property
                  with the utmost care and respect, ensuring clean job sites and long-lasting results.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-8">
                <BorderlessCTA
                  label="Learn More About Our Work"
                  variant="royal"
                  size="md"
                  onClick={() => onNavigate('about')}
                />
                <div className="flex items-center gap-3 text-sm text-[#27343D]/70">
                  <span className="font-['Barlow'] font-bold text-[#2457F5] text-lg">MP7489</span>
                  <span>Licensed Arkansas Master Plumber</span>
                </div>
              </div>
            </div>

            {/* Right Large Format Photography (Asymmetric, No Card Border) */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.craftPiping}
                  alt="Hargis Plumbing Co. Copper Pipe Soldering and Craftsmanship"
                  className="w-full h-[460px] object-cover object-center"
                />
                {/* Asymmetric overlay accent */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <span className="text-xs uppercase tracking-widest text-[#F3C75B] font-semibold block mb-1">
                    Verified Craftsmanship
                  </span>
                  <p className="text-sm text-white/90 font-medium">
                    Clean copper manifold assemblies and precision joints built to withstand decades of high residential demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED SERVICES OVERVIEW (Asymmetric Editorial Layout, Absolutely NO Boxes or Cards) */}
      <section className="bg-[#DCEEFF] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-widest text-[#2457F5] uppercase block mb-2">
              Our Capabilities
            </span>
            <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl text-[#27343D] tracking-tight uppercase leading-tight">
              Verified Master Plumbing Services.
            </h2>
            <p className="text-sm sm:text-base text-[#27343D]/80 mt-4 leading-relaxed">
              Every service we perform is backed by rigorous Arkansas Master Plumber standards. No shortcuts,
              no guesswork—just dependable solutions tailored to your property.
            </p>
          </div>

          {/* Editorial Stream (Alternating asymmetric layout, zero repetitive cards) */}
          <div className="space-y-20">
            {/* Service 1: Water Heaters */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <span className="text-xs font-bold tracking-widest uppercase text-[#2457F5] block mb-2">
                  01. Thermal & Supply
                </span>
                <h3 className="font-['Barlow'] font-bold text-2xl sm:text-3xl text-[#27343D] uppercase tracking-tight mb-4">
                  Water Heater Installation & Replacement
                </h3>
                <p className="text-[#27343D]/80 leading-relaxed text-sm sm:text-base mb-6">
                  Expert installation of high-efficiency on-demand tankless water heaters and traditional gas or electric tank units.
                  We calculate exact gallon demands and gas flow requirements for maximum hot water reliability and energy savings.
                </p>
                <ul className="space-y-2 text-sm text-[#27343D]/80 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2457F5]" />
                    <span>Tankless on-demand continuous hot water retrofits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2457F5]" />
                    <span>Expansion tank & code-compliant pressure relief valves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2457F5]" />
                    <span>Same-day diagnostics for pilot, burner, or element failures</span>
                  </li>
                </ul>
                <BorderlessCTA
                  label="Explore Water Heater Services"
                  variant="royal"
                  size="md"
                  onClick={() => onNavigate('services', 'water-heaters')}
                />
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 overflow-hidden shadow-lg">
                <img
                  src={IMAGES.waterHeater}
                  alt="Modern tankless water heater installation in Northwest Arkansas"
                  className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Service 2: Kitchen & Bath Plumbing Fixtures */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 border-t border-[#27343D]/10">
              <div className="lg:col-span-6 overflow-hidden shadow-lg">
                <img
                  src={IMAGES.kitchenBath}
                  alt="High-end brass faucet and undermount stone sink installation"
                  className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="lg:col-span-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#17B9B0] block mb-2">
                  02. Remodel & Fixtures
                </span>
                <h3 className="font-['Barlow'] font-bold text-2xl sm:text-3xl text-[#27343D] uppercase tracking-tight mb-4">
                  Kitchen & Bathroom Plumbing Remodeling
                </h3>
                <p className="text-[#27343D]/80 leading-relaxed text-sm sm:text-base mb-6">
                  Transform your living spaces with precision fixture installations and rough-in piping. We install designer faucets,
                  deep basins, freestanding soaking tubs, garbage disposals, and low-flow comfort toilets with immaculate finish quality.
                </p>
                <ul className="space-y-2 text-sm text-[#27343D]/80 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#17B9B0]" />
                    <span>Architectural faucets, undermount sinks, and garbage disposals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#17B9B0]" />
                    <span>Shower valves, diverters, and customized bath rough-ins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#17B9B0]" />
                    <span>Leak-proof supply shutoff valves & braided stainless lines</span>
                  </li>
                </ul>
                <BorderlessCTA
                  label="View Fixture & Remodel Services"
                  variant="aqua"
                  size="md"
                  onClick={() => onNavigate('services', 'kitchen-bath')}
                />
              </div>
            </div>

            {/* Service 3: Leak Detection & Pipe Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 border-t border-[#27343D]/10">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <span className="text-xs font-bold tracking-widest uppercase text-[#2457F5] block mb-2">
                  03. System Integrity
                </span>
                <h3 className="font-['Barlow'] font-bold text-2xl sm:text-3xl text-[#27343D] uppercase tracking-tight mb-4">
                  Precision Leak Detection & Repiping
                </h3>
                <p className="text-[#27343D]/80 leading-relaxed text-sm sm:text-base mb-6">
                  Water leaks can quickly cause extensive structural damage. Our licensed Master Plumber quickly isolates hidden supply
                  pipe leaks, slab leaks, and corroded sections, implementing lasting sweated copper repairs or modern PEX re-pipes.
                </p>
                <ul className="space-y-2 text-sm text-[#27343D]/80 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2457F5]" />
                    <span>Wall and ceiling water leak diagnosis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2457F5]" />
                    <span>Pinhole leak repairs and whole-house repiping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2457F5]" />
                    <span>Main shutoff ball valve and pressure regulator installation</span>
                  </li>
                </ul>
                <BorderlessCTA
                  label="View Pipe Repair Capabilities"
                  variant="royal"
                  size="md"
                  onClick={() => onNavigate('services', 'pipe-repairs')}
                />
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 overflow-hidden shadow-lg">
                <img
                  src={IMAGES.craftPiping}
                  alt="Plumbing copper line assembly and repair"
                  className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <BorderlessCTA
              label="Explore All Verified Plumbing Services"
              variant="royal"
              size="lg"
              onClick={() => onNavigate('services')}
            />
          </div>
        </div>
      </section>

      {/* 4. MASTER PLUMBER CREDENTIAL SPOTLIGHT (Electric Royal Blue Section #2457F5) */}
      <section className="bg-[#2457F5] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F3C75B] mb-4">
                <Shield className="w-4 h-4" />
                <span>Arkansas State Licensed Credential</span>
              </div>
              <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight mb-6 [text-wrap:balance]">
                Master Plumber — License MP7489.
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mb-8">
                In Arkansas, the Master Plumber designation represents the highest standard of technical competence,
                code comprehension, and plumbing engineering. When you hire Hargis Plumbing Co., you work directly with
                a licensed Master Plumber who oversees every pipe, valve, and connection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/20 text-sm">
                <div>
                  <div className="font-['Barlow'] font-bold text-2xl text-[#F3C75B] mb-1">MP7489</div>
                  <div className="text-white/80 text-xs">Official State License Credential</div>
                </div>
                <div>
                  <div className="font-['Barlow'] font-bold text-2xl text-white mb-1">Free</div>
                  <div className="text-white/80 text-xs">Transparent upfront estimates</div>
                </div>
                <div>
                  <div className="font-['Barlow'] font-bold text-2xl text-[#17B9B0] mb-1">Direct</div>
                  <div className="text-white/80 text-xs">Owner & Master Plumber on call</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center p-8 bg-white/10 backdrop-blur-sm">
              <div className="w-20 h-20 mb-4 flex items-center justify-center border-2 border-[#F3C75B]">
                <Award className="w-10 h-10 text-[#F3C75B]" />
              </div>
              <div className="font-['Barlow'] font-bold text-xl uppercase tracking-wider text-center mb-1">
                Service You Can Trust
              </div>
              <p className="text-xs text-white/80 text-center mb-6 max-w-xs">
                Call or text our licensed team directly for immediate scheduling or to discuss your plumbing project.
              </p>
              <BorderlessCTA
                label="Call (870) 820-8096"
                variant="gold"
                size="md"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                arrowType="upRight"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREA: NORTHWEST ARKANSAS (Soft Mint #E7F5EF Background) */}
      <section className="bg-[#E7F5EF] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-6 overflow-hidden shadow-xl">
              <img
                src={IMAGES.nwaHomes}
                alt="Northwest Arkansas residential neighborhoods in Bentonville and Rogers"
                className="w-full h-[420px] object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-[#17B9B0] uppercase block mb-2">
                Locally Owned & Operated
              </span>
              <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl text-[#27343D] uppercase tracking-tight leading-tight mb-6">
                Proudly Serving Northwest Arkansas.
              </h2>
              <p className="text-sm sm:text-base text-[#27343D]/80 leading-relaxed mb-8">
                Northwest Arkansas is growing rapidly, and having a dependable, honest local plumbing partner
                is essential for protecting your property. Hargis Plumbing Co. serves residential homeowners,
                landlords, and commercial properties across all major NWA corridors.
              </p>

              <div className="grid grid-cols-2 gap-6 pb-8 border-b border-[#27343D]/10">
                {SERVICE_AREAS.map((city) => (
                  <div key={city.name} className="flex flex-col">
                    <span className="font-['Barlow'] font-bold text-lg text-[#27343D] uppercase">
                      {city.name}, AR
                    </span>
                    <span className="text-xs text-[#2457F5] font-semibold mt-0.5">{city.county}</span>
                    <span className="text-xs text-[#27343D]/70 mt-1 leading-snug">{city.highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-8">
                <BorderlessCTA
                  label="Request Free NWA Estimate"
                  variant="royal"
                  size="md"
                  onClick={() => onNavigate('contact')}
                />
                <span className="text-xs text-[#27343D]/70 uppercase tracking-widest font-semibold">
                  Call or Text to Schedule
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP (Warm White / Pure White) */}
      <section className="bg-[#FFFDF7] py-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-[#2457F5] uppercase block mb-3">
            Ready to Get Started?
          </span>
          <h2 className="font-['Barlow'] font-extrabold text-3xl sm:text-5xl text-[#27343D] uppercase tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Experience Honest Plumbing Done Right.
          </h2>
          <p className="text-base text-[#27343D]/75 max-w-xl mx-auto mb-10 leading-relaxed">
            Free estimates, transparent communication, and Master Plumber quality for your Northwest Arkansas home or business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <BorderlessCTA
              label="Schedule Your Free Estimate →"
              variant="royal"
              size="lg"
              onClick={() => onNavigate('contact')}
            />
            <BorderlessCTA
              label="Call (870) 820-8096 ↗"
              variant="dark"
              size="lg"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              arrowType="upRight"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
