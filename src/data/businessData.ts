import { ServiceArea, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Hargis Plumbing Co.',
  tagline: 'Service You Can Trust!',
  brandMessage: 'Proudly serving NWA. Free estimates. Call or text to schedule.',
  credential: 'Master Plumber — MP7489',
  credentialNumber: 'MP7489',
  phone: '+1 870-820-8096',
  phoneRaw: '+18708208096',
  phoneDisplay: '(870) 820-8096',
  facebook: 'https://www.facebook.com/HargisPlumbingCo',
  location: 'Northwest Arkansas (NWA)',
  hours: 'Monday – Saturday: 7:00 AM – 6:00 PM | Emergency Availability',
  logoTransparent: '/images/hargis_logo_transparent.png',
  logoSquare: '/images/hargis_fb_cover.jpg',
  logoWhite: '/images/hargis_logo_white.png',
};

export const IMAGES = {
  hero: '/images/hero_working.jpg',
  waterHeater: '/images/water_heater.jpg',
  kitchenBath: '/images/kitchen_bath.jpg',
  craftPiping: '/images/craft_piping.jpg',
  nwaHomes: '/images/nwa_homes.jpg',
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Bentonville',
    county: 'Benton County',
    highlight: 'Residential plumbing maintenance, tankless systems & remodels',
    tag: 'Bentonville, AR',
  },
  {
    name: 'Rogers',
    county: 'Benton County',
    highlight: 'Water heater replacement, leak repair & comprehensive fixtures',
    tag: 'Rogers, AR',
  },
  {
    name: 'Springdale',
    county: 'Washington & Benton Counties',
    highlight: 'Drain diagnostics, pipe installation & commercial plumbing',
    tag: 'Springdale, AR',
  },
  {
    name: 'Fayetteville',
    county: 'Washington County',
    highlight: 'Complete residential plumbing, emergency repairs & free estimates',
    tag: 'Fayetteville, AR',
  },
];

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'water-heaters',
    title: 'Water Heater Installation & Repair',
    tagline: 'High-Efficiency Tankless & Standard Tank Systems',
    category: 'Thermal & Water Supply',
    description:
      'Expert sizing, safe installation, and rapid repair of residential water heating systems. Whether retrofitting an energy-efficient on-demand tankless unit or replacing a traditional storage tank, we ensure code-compliant venting, gas or electrical connections, and balanced water pressure.',
    details: [
      'Tankless on-demand water heater installations',
      'Standard electric and natural gas tank replacements',
      'Expansion tank installation & pressure balance valves',
      'System flushing, element replacement & burner servicing',
    ],
    image: IMAGES.waterHeater,
    imageAlt: 'Cleanly installed modern high-efficiency tankless water heater with copper piping',
    accentColor: '#2457F5',
  },
  {
    id: 'pipe-repairs',
    title: 'Leak Detection & Pipe Repair',
    tagline: 'Precision Soldering, Copper & PEX Re-Piping',
    category: 'System Diagnostics & Integrity',
    description:
      'From hidden pinhole leaks inside walls to damaged copper supply lines, our Master Plumber diagnostics identify the root cause with minimal disturbance to your home. We provide permanent repairs using premium copper soldering or high-grade flexible PEX piping.',
    details: [
      'Acoustic and visual leak locating in walls and basements',
      'Sweated copper pipe repair and manifold rebuilds',
      'Corroded pipe remediation & whole-home repiping',
      'Freeze damage restoration & emergency shutoff valves',
    ],
    image: IMAGES.craftPiping,
    imageAlt: 'Master plumber precision copper pipe soldering and measurement',
    accentColor: '#17B9B0',
  },
  {
    id: 'kitchen-bath',
    title: 'Kitchen & Bathroom Plumbing',
    tagline: 'Architectural Fixtures, Sinks, Faucets & Remodel Trims',
    category: 'Residential Upgrades',
    description:
      'Seamless plumbing rough-ins and finish fixture trims for kitchen renovations, bath updates, and new residential additions. We install high-end designer faucets, deep undermount sinks, garbage disposals, luxury showers, and comfort-height toilets with leak-proof precision.',
    details: [
      'Kitchen sink basins, designer faucets & sprayer lines',
      'Garbage disposal installation and water filter lines',
      'Freestanding tub and custom walk-in shower rough-ins',
      'Low-flow comfort toilets, bidets & supply shutoffs',
    ],
    image: IMAGES.kitchenBath,
    imageAlt: 'Luxury brass faucet running clear water into an architectural stone sink',
    accentColor: '#F3C75B',
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Solutions & Clog Clearing',
    tagline: 'Effective Residential Drain Clearing & Vent Line Inspection',
    category: 'Drainage & Wastewater',
    description:
      'Slow drains and persistent backups compromise hygiene and comfort. We clear kitchen grease build-ups, bathroom hair blockages, main waste line clogs, and venting restrictions to restore free-flowing drainage throughout your entire property.',
    details: [
      'Mechanical drain snaking for stubborn obstructions',
      'Bathroom vanity, tub, and shower line clearing',
      'Kitchen sink and disposal drain line restoration',
      'Plumbing stack vent inspection and air admittance',
    ],
    image: IMAGES.hero,
    imageAlt: 'Expert plumber working under sink with professional tools',
    accentColor: '#2457F5',
  },
  {
    id: 'valves-lines',
    title: 'Water Lines, Pressure Regulators & Valves',
    tagline: 'Main Shutoffs, Pressure Regulating Valves (PRV) & Hose Bibbs',
    category: 'Infrastructure & Pressure Control',
    description:
      'Excessive municipal water pressure stresses residential pipes and appliances. We install high-precision pressure reducing valves (PRV) to protect your plumbing infrastructure, replace aging gate valves with reliable quarter-turn ball valves, and install frost-proof exterior sillcocks.',
    details: [
      'Whole-house pressure reducing valve (PRV) installations',
      'Main water shutoff ball valve upgrades',
      'Frost-free outdoor hose bibb and spigot replacements',
      'Main supply line trenching and service entrance piping',
    ],
    image: IMAGES.craftPiping,
    imageAlt: 'Copper manifold and brass shutoff valve array',
    accentColor: '#17B9B0',
  },
  {
    id: 'property-maintenance',
    title: 'Residential & Property Manager Plumbing',
    tagline: 'Trusted Turnkey Plumbing for Homeowners, Landlords & Businesses',
    category: 'Commercial & Multi-Property',
    description:
      'Dedicated plumbing support for property managers, rental portfolios, real estate transactions, and local Northwest Arkansas business facilities. Prompt response times, transparent assessments, and direct communication with a licensed Master Plumber.',
    details: [
      'Tenant turnover plumbing evaluations and repairs',
      'Pre-purchase plumbing inspections & code corrections',
      'Commercial restroom maintenance and fixture replacements',
      'Direct scheduling with landlords and property management teams',
    ],
    image: IMAGES.nwaHomes,
    imageAlt: 'Northwest Arkansas residential community street view',
    accentColor: '#2457F5',
  },
];
