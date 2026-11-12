import React, { useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, VERIFIED_SERVICES, IMAGES } from '../data/businessData';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { Award, Check, Phone } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  useEffect(() => {
    if (selectedServiceId) {
      const el = document.getElementById(selectedServiceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedServiceId]);

  return (
    <div className="w-full pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-[#FFFDF7] py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2457F5] mb-3">
              <Award className="w-4 h-4" />
              <span>Master Plumber MP7489 Verified Scope</span>
            </div>
            <h1 className="font-['Barlow'] font-extrabold text-4xl sm:text-6xl text-[#27343D] uppercase tracking-tight leading-[1.05] mb-6">
              Plumbing Services & Technical Specialties.
            </h1>
            <p className="text-base sm:text-lg text-[#27343D]/80 leading-relaxed font-normal">
              From energy-efficient tankless water heaters and whole-home copper repiping to luxury fixture trim-outs
              and reliable drain clearing, all services are performed directly to Arkansas plumbing code standards. Free estimates on every job.
            </p>
          </div>

          {/* Quick jump navigation (Text links with dividers, zero cards or pill badges) */}
          <div className="mt-12 pt-6 border-t border-black/10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#27343D]/70">
            {VERIFIED_SERVICES.map((s, idx) => (
              <React.Fragment key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="hover:text-[#2457F5] transition-colors"
                >
                  {s.title}
                </a>
                {idx < VERIFIED_SERVICES.length - 1 && <span className="text-black/20">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Distinct Editorial Layouts */}
      <div className="space-y-0">
        {VERIFIED_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          const bgClass =
            index === 0
              ? 'bg-[#FFFFFF]'
              : index === 1
              ? 'bg-[#DCEEFF]'
              : index === 2
              ? 'bg-[#FFFDF7]'
              : index === 3
              ? 'bg-[#E7F5EF]'
              : index === 4
              ? 'bg-[#FFFFFF]'
              : 'bg-[#DCEEFF]';

          return (
            <section
              key={service.id}
              id={service.id}
              className={`${bgClass} py-24 border-b border-black/5 scroll-mt-24`}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#2457F5]">
                        0{index + 1} · {service.category}
                      </span>
                    </div>

                    <h2 className="font-['Barlow'] font-bold text-3xl sm:text-4xl text-[#27343D] uppercase tracking-tight mb-2">
                      {service.title}
                    </h2>

                    <div className="text-sm font-semibold text-[#17B9B0] uppercase tracking-wider mb-6">
                      {service.tagline}
                    </div>

                    <p className="text-sm sm:text-base text-[#27343D]/80 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold uppercase tracking-widest text-[#27343D]/50 mb-2">
                        Key Service Inclusions
                      </div>
                      {service.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 text-sm text-[#27343D]/85">
                          <Check className="w-4 h-4 text-[#2457F5] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-black/10">
                      <BorderlessCTA
                        label="Request Estimate for this Service"
                        variant="royal"
                        size="md"
                        onClick={() => onNavigate('contact')}
                      />
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-xs tracking-wider uppercase font-semibold text-[#27343D] hover:text-[#2457F5] flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#17B9B0]" />
                        <span>Call (870) 820-8096</span>
                      </a>
                    </div>
                  </div>

                  {/* Imagery Column (Large Asymmetric Frame, No Card Border) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                    } overflow-hidden shadow-2xl relative`}
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-80 sm:h-[460px] object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
                      <span className="font-semibold">{service.title}</span> — Northwest Arkansas
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Service Consultation CTA */}
      <section className="bg-[#2457F5] text-white py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F3C75B] block mb-3">
            Custom Plumbing Needs?
          </span>
          <h2 className="font-['Barlow'] font-bold text-3xl sm:text-5xl uppercase tracking-tight mb-4 [text-wrap:balance]">
            Have an Upcoming Plumbing Project or Immediate Repair?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            Call or text us today. We provide free upfront estimates with zero obligation throughout Bentonville, Rogers, Springdale, and Fayetteville.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <BorderlessCTA
              label="Submit Estimate Details →"
              variant="gold"
              size="lg"
              onClick={() => onNavigate('contact')}
            />
            <BorderlessCTA
              label="Call / Text Our Plumber ↗"
              variant="light"
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
