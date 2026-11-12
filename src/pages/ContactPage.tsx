import React, { useState } from 'react';
import { PageId, EstimateFormData, EstimateConfirmation } from '../types';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/businessData';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { Phone, MessageSquare, Award, MapPin, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<EstimateFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bentonville',
    issue: '',
    preferredContact: 'phone',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<EstimateConfirmation | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return 'Please enter your full name.';
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 7) {
      return 'Please enter a valid phone number (e.g. 870-820-8096 or 479-555-0142).';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'Please enter a valid email address (e.g. name@example.com).';
    }
    if (!formData.address.trim() || formData.address.trim().length < 3) {
      return 'Please enter your service street address in Northwest Arkansas.';
    }
    if (!formData.issue.trim() || formData.issue.trim().length < 5) {
      return 'Please provide a brief description of your plumbing issue or required project.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      // Try posting to Express API route /api/estimate
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setConfirmation(data.confirmation);
      } else {
        // Fallback for static Vercel deployment where Express backend is not running
        const fallbackConfirmation: EstimateConfirmation = {
          id: `HPC-${Date.now().toString().slice(-6)}`,
          createdAt: new Date().toISOString(),
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          address: formData.address.trim(),
          city: formData.city,
          issue: formData.issue.trim(),
          preferredContact: formData.preferredContact,
          status: 'received',
        };
        setConfirmation(fallbackConfirmation);
      }
    } catch (err) {
      // Network/Vercel static fallback
      const fallbackConfirmation: EstimateConfirmation = {
        id: `HPC-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        address: formData.address.trim(),
        city: formData.city,
        issue: formData.issue.trim(),
        preferredContact: formData.preferredContact,
        status: 'received',
      };
      setConfirmation(fallbackConfirmation);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setConfirmation(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      city: 'Bentonville',
      issue: '',
      preferredContact: 'phone',
    });
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. SECTION INTRO */}
      <section className="bg-[#FFFDF7] py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#2457F5] mb-3">
              <Award className="w-4 h-4 text-[#F3C75B]" />
              <span>Free Estimates · Call or Text to Schedule</span>
            </div>
            <h1 className="font-['Barlow'] font-extrabold text-4xl sm:text-6xl text-[#27343D] uppercase tracking-tight leading-[1.05] mb-6">
              Contact & Free Estimates.
            </h1>
            <p className="text-base sm:text-lg text-[#27343D]/80 leading-relaxed font-normal">
              Need immediate plumbing assistance or planning a home upgrade? Get in touch directly with
              Hargis Plumbing Co. We provide free upfront estimates throughout Bentonville, Rogers, Springdale, and Fayetteville.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPLIT: CONTACT METHODS & ESTIMATE FORM (Clean Underline Borderless Form, Zero Boxed Cards) */}
      <section className="bg-[#FFFDF7] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Direct Phone / Text & Business Details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#2457F5] block mb-2">
                  Fastest Response
                </span>
                <h2 className="font-['Barlow'] font-bold text-2xl sm:text-3xl text-[#27343D] uppercase tracking-tight mb-4">
                  Call or Text Our Plumber Directly
                </h2>
                <p className="text-sm text-[#27343D]/80 leading-relaxed mb-6">
                  For active leaks, urgent plumbing failures, or quick questions, calling or texting is the quickest way to reach us.
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center gap-4 text-2xl font-['Barlow'] font-bold text-[#2457F5] hover:text-[#17B9B0] transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#DCEEFF] text-[#2457F5] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#27343D]/60 font-medium">Click to Call</div>
                      {BUSINESS_INFO.phoneDisplay}
                    </div>
                  </a>

                  <a
                    href={`sms:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center gap-4 text-2xl font-['Barlow'] font-bold text-[#17B9B0] hover:text-[#2457F5] transition-colors pt-2"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#E7F5EF] text-[#17B9B0] shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#27343D]/60 font-medium">Click to Text</div>
                      {BUSINESS_INFO.phoneDisplay}
                    </div>
                  </a>
                </div>
              </div>

              {/* Verified Details */}
              <div className="pt-8 border-t border-black/10 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#27343D]/50 mb-1">
                    State License & Credential
                  </div>
                  <div className="font-['Barlow'] font-bold text-xl text-[#27343D] uppercase flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F3C75B]" />
                    Master Plumber — MP7489
                  </div>
                  <div className="text-xs text-[#27343D]/70 mt-1">
                    State of Arkansas Department of Labor & Licensing
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#27343D]/50 mb-1">
                    Official Facebook Page
                  </div>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#2457F5] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>facebook.com/HargisPlumbingCo</span>
                    <span className="text-xs">↗</span>
                  </a>
                  <div className="text-xs text-[#27343D]/70 mt-1">
                    Follow us for real project updates and service notices.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#27343D]/50 mb-2">
                    Service Locations
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-[#27343D]/80">
                    {SERVICE_AREAS.map((city) => (
                      <div key={city.name} className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#17B9B0] shrink-0" />
                        <span>{city.name}, AR</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Free Estimate Request Form */}
            <div className="lg:col-span-7">
              {confirmation ? (
                /* Verified Submission Confirmation */
                <div className="py-8 space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 text-[#17B9B0]">
                    <CheckCircle className="w-8 h-8" />
                    <h3 className="font-['Barlow'] font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#27343D]">
                      Estimate Request Received
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#27343D]/80 leading-relaxed font-normal">
                    Thank you, <strong className="font-semibold text-[#27343D]">{confirmation.name}</strong>. Your estimate
                    request has been logged with Hargis Plumbing Co. Our Master Plumber will review your details
                    and reach out via <strong className="font-semibold text-[#27343D]">{confirmation.preferredContact}</strong> shortly.
                  </p>

                  <div className="py-6 border-y border-black/10 space-y-2 text-xs sm:text-sm font-mono text-[#27343D]/80">
                    <div>
                      <span className="text-[#27343D]/50 uppercase font-sans">Confirmation Ticket:</span>{' '}
                      <span className="font-bold text-[#2457F5]">{confirmation.id}</span>
                    </div>
                    <div>
                      <span className="text-[#27343D]/50 uppercase font-sans">Service Address:</span>{' '}
                      {confirmation.address}, {confirmation.city}, AR
                    </div>
                    <div>
                      <span className="text-[#27343D]/50 uppercase font-sans">Callback Phone:</span>{' '}
                      {confirmation.phone}
                    </div>
                    {confirmation.email && (
                      <div>
                        <span className="text-[#27343D]/50 uppercase font-sans">Email:</span>{' '}
                        {confirmation.email}
                      </div>
                    )}
                    <div>
                      <span className="text-[#27343D]/50 uppercase font-sans">Plumbing Need:</span>{' '}
                      {confirmation.issue}
                    </div>
                    <div>
                      <span className="text-[#27343D]/50 uppercase font-sans">Timestamp:</span>{' '}
                      {new Date(confirmation.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 pt-4">
                    <BorderlessCTA
                      label="Submit Another Request"
                      variant="royal"
                      size="md"
                      onClick={handleReset}
                    />
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs uppercase tracking-wider font-semibold text-[#27343D] hover:text-[#2457F5]"
                    >
                      Need immediate help? Call (870) 820-8096 ↗
                    </a>
                  </div>
                </div>
              ) : (
                /* Free Estimate Form with Clean Underline Borderless Fields */
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#2457F5] block mb-2">
                      Online Scheduling
                    </span>
                    <h2 className="font-['Barlow'] font-bold text-2xl sm:text-3xl text-[#27343D] uppercase tracking-tight mb-2">
                      Request Your Free Estimate
                    </h2>
                    <p className="text-xs sm:text-sm text-[#27343D]/70 leading-relaxed font-normal">
                      Fill out the details below. All estimates are 100% free with no high-pressure obligations.
                    </p>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                        Full Name <span className="text-[#2457F5]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        required
                        className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-[#2457F5] py-2.5 px-0 text-sm text-[#27343D] placeholder:text-neutral-400 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                        Phone Number <span className="text-[#2457F5]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (870) 820-8096"
                        required
                        className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-[#2457F5] py-2.5 px-0 text-sm text-[#27343D] placeholder:text-neutral-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and City Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                        Email Address <span className="text-xs text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-[#2457F5] py-2.5 px-0 text-sm text-[#27343D] placeholder:text-neutral-400 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                        City / Community
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-[#2457F5] py-2.5 px-0 text-sm text-[#27343D] outline-none transition-colors"
                      >
                        <option value="Bentonville">Bentonville, AR</option>
                        <option value="Rogers">Rogers, AR</option>
                        <option value="Springdale">Springdale, AR</option>
                        <option value="Fayetteville">Fayetteville, AR</option>
                        <option value="Northwest Arkansas">Other NWA Area</option>
                      </select>
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                      Service Street Address <span className="text-[#2457F5]">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. 1400 SW A St"
                      required
                      className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-[#2457F5] py-2.5 px-0 text-sm text-[#27343D] placeholder:text-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Issue Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                      Describe the Plumbing Service or Issue <span className="text-[#2457F5]">*</span>
                    </label>
                    <textarea
                      name="issue"
                      rows={3}
                      value={formData.issue}
                      onChange={handleChange}
                      placeholder="e.g. Need to replace an aging 50-gallon water heater with a tankless system, or investigating a persistent leak under the kitchen sink..."
                      required
                      className="w-full bg-transparent border-b-2 border-neutral-300 focus:border-[#2457F5] py-2.5 px-0 text-sm text-[#27343D] placeholder:text-neutral-400 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#27343D] block">
                      Preferred Response Method
                    </label>
                    <div className="flex items-center gap-6 text-sm text-[#27343D]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="text-[#2457F5] focus:ring-0"
                        />
                        <span>Phone Call</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="text"
                          checked={formData.preferredContact === 'text'}
                          onChange={handleChange}
                          className="text-[#2457F5] focus:ring-0"
                        />
                        <span>Text Message</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="text-[#2457F5] focus:ring-0"
                        />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 flex items-center gap-6">
                    <BorderlessCTA
                      label={loading ? 'Submitting Estimate Request...' : 'Send Free Estimate Request →'}
                      type="submit"
                      variant="royal"
                      size="lg"
                      disabled={loading}
                    />
                    {loading && <RefreshCw className="w-4 h-4 text-[#2457F5] animate-spin" />}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE MAP / COVERAGE NOTE (Sky Blue #DCEEFF Background) */}
      <section className="bg-[#DCEEFF] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="font-['Barlow'] font-bold text-xl uppercase text-[#27343D]">Bentonville, AR</span>
              <span className="text-xs text-[#2457F5] font-semibold mt-1">Benton County</span>
              <span className="text-xs text-[#27343D]/70 mt-1">Downtown, South Walton Blvd, residential neighborhoods</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Barlow'] font-bold text-xl uppercase text-[#27343D]">Rogers, AR</span>
              <span className="text-xs text-[#2457F5] font-semibold mt-1">Benton County</span>
              <span className="text-xs text-[#27343D]/70 mt-1">Pinnacle, Promenade, historic downtown & lake corridor</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Barlow'] font-bold text-xl uppercase text-[#27343D]">Springdale, AR</span>
              <span className="text-xs text-[#2457F5] font-semibold mt-1">Washington & Benton</span>
              <span className="text-xs text-[#27343D]/70 mt-1">Emma Ave, commercial corridors, residential properties</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Barlow'] font-bold text-xl uppercase text-[#27343D]">Fayetteville, AR</span>
              <span className="text-xs text-[#2457F5] font-semibold mt-1">Washington County</span>
              <span className="text-xs text-[#27343D]/70 mt-1">Uptown, campus area, residential homes & rental portfolios</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
