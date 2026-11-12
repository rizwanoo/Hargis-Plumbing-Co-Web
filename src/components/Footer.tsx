import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/businessData';
import { BorderlessCTA } from './BorderlessCTA';
import { Phone, MessageSquare, Award, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#27343D] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={BUSINESS_INFO.logoTransparent}
                alt="Hargis Plumbing Co."
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div>
                <span className="font-['Barlow'] font-extrabold text-2xl uppercase tracking-tight block">
                  Hargis Plumbing Co.
                </span>
                <span className="text-xs text-[#17B9B0] uppercase tracking-widest font-semibold flex items-center gap-1.5 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                  Master Plumber MP7489
                </span>
              </div>
            </div>

            <p className="text-sm text-white/75 leading-relaxed max-w-md mb-6 font-normal">
              "{BUSINESS_INFO.tagline}" Professional, honest plumbing services for residential homeowners,
              property managers, and local businesses across Northwest Arkansas. Free estimates on all installations and repairs.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <BorderlessCTA
                label="Call Us (870) 820-8096"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                variant="gold"
                size="sm"
                arrowType="upRight"
              />
              <BorderlessCTA
                label="Text Our Plumber"
                href={`sms:${BUSINESS_INFO.phoneRaw}`}
                variant="aqua"
                size="sm"
                arrowType="upRight"
              />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-['Barlow'] font-bold text-sm uppercase tracking-widest text-white/50 mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3.5 text-sm font-medium">
              <button
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left bg-transparent border-0 text-white/80 hover:text-[#F3C75B] transition-colors cursor-pointer p-0"
              >
                Home Overview
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left bg-transparent border-0 text-white/80 hover:text-[#F3C75B] transition-colors cursor-pointer p-0"
              >
                Plumbing Services & Specialties
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left bg-transparent border-0 text-white/80 hover:text-[#F3C75B] transition-colors cursor-pointer p-0"
              >
                About & Authentic Work
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left bg-transparent border-0 text-white/80 hover:text-[#F3C75B] transition-colors cursor-pointer p-0"
              >
                Contact & Free Estimates
              </button>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-[#17B9B0] hover:text-white transition-colors pt-2 flex items-center gap-1.5"
              >
                <span>Official Facebook Page</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-['Barlow'] font-bold text-sm uppercase tracking-widest text-white/50 mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#17B9B0]" />
              Service Areas in NWA
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-white/80">
              {SERVICE_AREAS.map((area) => (
                <div key={area.name} className="flex flex-col">
                  <span className="font-semibold text-white">{area.name}, AR</span>
                  <span className="text-xs text-white/50">{area.county}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/60 leading-relaxed">
              Proudly serving residential and commercial plumbing clients throughout all surrounding Northwest Arkansas communities.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Hargis Plumbing Co. All rights reserved. Master Plumber License #MP7489.
          </div>
          <div className="flex items-center gap-6 text-white/60">
            <span>Free Estimates</span>
            <span>·</span>
            <span>Residential & Commercial</span>
            <span>·</span>
            <span className="text-[#17B9B0] font-medium">Arkansas Master Plumber</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
