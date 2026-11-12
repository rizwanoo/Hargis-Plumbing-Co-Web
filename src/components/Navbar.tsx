import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, VERIFIED_SERVICES } from '../data/businessData';
import { BorderlessCTA } from './BorderlessCTA';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250);
  };

  // Nav item styling
  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-white/95 backdrop-blur-md text-[#27343D] shadow-sm border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 md:h-24 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Original Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 bg-transparent border-0 p-0 cursor-pointer text-left shrink-0 group"
            aria-label="Hargis Plumbing Co. Home"
          >
            <div className="h-12 md:h-14 w-auto flex items-center">
              <img
                src={BUSINESS_INFO.logoTransparent}
                alt="Hargis Plumbing Co. Official Logo"
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
                  isTransparent ? 'brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : ''
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-['Barlow'] font-extrabold text-lg md:text-xl tracking-tight leading-none uppercase transition-colors duration-200 ${
                  isTransparent ? 'text-white' : 'text-[#27343D] group-hover:text-[#2457F5]'
                }`}
              >
                Hargis Plumbing Co.
              </span>
              <span
                className={`text-[10px] md:text-xs tracking-wider uppercase font-medium mt-0.5 ${
                  isTransparent ? 'text-white/80' : 'text-[#2457F5]'
                }`}
              >
                Master Plumber · MP7489
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (4-5 single line text links) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <button
              onClick={() => onNavigate('home')}
              className={`bg-transparent border-0 cursor-pointer whitespace-nowrap uppercase py-1 relative transition-colors duration-200 ${
                currentPage === 'home'
                  ? isTransparent
                    ? 'text-[#F3C75B] font-bold'
                    : 'text-[#2457F5] font-bold'
                  : isTransparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#27343D] hover:text-[#2457F5]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isTransparent ? 'bg-[#F3C75B]' : 'bg-[#2457F5]'
                  }`}
                />
              )}
            </button>

            {/* Services with Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => onNavigate('services')}
                className={`bg-transparent border-0 cursor-pointer whitespace-nowrap uppercase py-1 flex items-center gap-1.5 transition-colors duration-200 ${
                  currentPage === 'services'
                    ? isTransparent
                      ? 'text-[#F3C75B] font-bold'
                      : 'text-[#2457F5] font-bold'
                    : isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#27343D] hover:text-[#2457F5]'
                }`}
              >
                Plumbing Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {currentPage === 'services' && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      isTransparent ? 'bg-[#F3C75B]' : 'bg-[#2457F5]'
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-80 pt-3 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white text-[#27343D] shadow-xl border-t-2 border-[#2457F5] py-3 px-2">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#2457F5] px-4 py-1.5 border-b border-neutral-100">
                      Verified Plumbing Services
                    </div>
                    {VERIFIED_SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          onNavigate('services', s.id);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-medium text-[#27343D] hover:text-[#2457F5] hover:bg-[#F8FAFC] transition-colors flex items-center justify-between group"
                      >
                        <span>{s.title}</span>
                        <span className="text-[#2457F5] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>
                    ))}
                    <div className="pt-2 mt-1 border-t border-neutral-100 px-4">
                      <BorderlessCTA
                        label="View All Services"
                        size="sm"
                        variant="royal"
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          onNavigate('services');
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className={`bg-transparent border-0 cursor-pointer whitespace-nowrap uppercase py-1 relative transition-colors duration-200 ${
                currentPage === 'about'
                  ? isTransparent
                    ? 'text-[#F3C75B] font-bold'
                    : 'text-[#2457F5] font-bold'
                  : isTransparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#27343D] hover:text-[#2457F5]'
              }`}
            >
              Our Work & About
              {currentPage === 'about' && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isTransparent ? 'bg-[#F3C75B]' : 'bg-[#2457F5]'
                  }`}
                />
              )}
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`bg-transparent border-0 cursor-pointer whitespace-nowrap uppercase py-1 relative transition-colors duration-200 ${
                currentPage === 'contact'
                  ? isTransparent
                    ? 'text-[#F3C75B] font-bold'
                    : 'text-[#2457F5] font-bold'
                  : isTransparent
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#27343D] hover:text-[#2457F5]'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    isTransparent ? 'bg-[#F3C75B]' : 'bg-[#2457F5]'
                  }`}
                />
              )}
            </button>
          </nav>

          {/* Zone 3: Primary Action (Transparent Borderless CTA) */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className={`flex items-center gap-2 text-xs tracking-wider uppercase font-semibold transition-colors duration-200 ${
                isTransparent ? 'text-white hover:text-[#F3C75B]' : 'text-[#27343D] hover:text-[#2457F5]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#17B9B0]" />
              <span>(870) 820-8096</span>
            </a>

            <BorderlessCTA
              label="Request Estimate"
              variant={isTransparent ? 'gold' : 'royal'}
              size="sm"
              arrowType="right"
              onClick={() => onNavigate('contact')}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 bg-transparent border-0 cursor-pointer transition-colors ${
              isTransparent ? 'text-white' : 'text-[#27343D]'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#27343D]/95 text-white backdrop-blur-lg flex flex-col pt-28 px-8 pb-12 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 text-lg font-['Barlow'] font-bold tracking-wider uppercase">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('home');
              }}
              className="text-left bg-transparent border-0 text-white hover:text-[#F3C75B] py-2"
            >
              Home
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('services');
              }}
              className="text-left bg-transparent border-0 text-white hover:text-[#F3C75B] py-2"
            >
              Plumbing Services
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('about');
              }}
              className="text-left bg-transparent border-0 text-white hover:text-[#F3C75B] py-2"
            >
              Our Work & About
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('contact');
              }}
              className="text-left bg-transparent border-0 text-white hover:text-[#F3C75B] py-2"
            >
              Contact & Free Estimates
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="text-xs uppercase tracking-widest text-[#17B9B0] font-semibold">
              Direct Contact · Call or Text
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xl font-['Barlow'] font-bold text-white flex items-center gap-3"
            >
              <Phone className="w-5 h-5 text-[#F3C75B]" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <div className="text-xs text-white/70">
              Licensed Master Plumber — MP7489 · Bentonville, Rogers, Springdale, Fayetteville
            </div>
            <div className="pt-4">
              <BorderlessCTA
                label="Request Free Estimate →"
                variant="gold"
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('contact');
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
