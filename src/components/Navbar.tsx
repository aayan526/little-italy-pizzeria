import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { scrollToElement } from '../utils/motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToElement(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#1C1917]/10 py-3 text-[#1C1917]'
            : 'bg-gradient-to-b from-[#1C1917]/85 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isScrolled ? 'bg-[#C0392B] text-white' : 'bg-[#C0392B] text-white shadow-md'
                }`}
              >
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight font-['Raleway'] leading-none">
                  {RESTAURANT_INFO.shortName}
                </span>
                <span
                  className={`text-[10px] tracking-widest uppercase font-medium mt-0.5 ${
                    isScrolled ? 'text-[#C0392B]' : 'text-[#C59B27]'
                  }`}
                >
                  Restaurant & Pizzeria
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
              <button
                onClick={() => handleNavClick('story')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Our Story
              </button>
              <button
                onClick={() => handleNavClick('menu')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Menu
              </button>
              <button
                onClick={() => handleNavClick('catering')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Catering & Events
              </button>
              <button
                onClick={() => handleNavClick('reviews')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Reviews
              </button>
              <button
                onClick={() => handleNavClick('hours-location')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Hours & Location
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Direct Phone & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className={`flex items-center gap-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  isScrolled ? 'text-[#1C1917] hover:text-[#C0392B]' : 'text-white hover:text-[#C59B27]'
                }`}
                title="Call Little Italy Restaurant"
              >
                <Phone className="w-4 h-4 text-[#C0392B]" />
                <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('reservations')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold bg-[#C0392B] text-white hover:bg-[#96281B] transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle (< 1024px) */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="sm:hidden p-2 rounded-full bg-[#C0392B] text-white"
                aria-label="Call restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-[#1C1917] hover:bg-black/5'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF6F0] p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1C1917]/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#C0392B] text-white flex items-center justify-center">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-lg text-[#1C1917]">Little Italy</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-stone-500 hover:text-stone-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 text-base font-semibold text-[#1C1917]">
                <button
                  onClick={() => handleNavClick('story')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60"
                >
                  Our Story
                </button>
                <button
                  onClick={() => handleNavClick('menu')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60"
                >
                  Menu & Signatures
                </button>
                <button
                  onClick={() => handleNavClick('catering')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60"
                >
                  Catering & Private Dining
                </button>
                <button
                  onClick={() => handleNavClick('reviews')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60"
                >
                  Guest Reviews
                </button>
                <button
                  onClick={() => handleNavClick('hours-location')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60"
                >
                  Hours & Location
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors"
                >
                  Contact & Services
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C1917]/10 space-y-3">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-[#1C1917]/20 text-[#1C1917] font-semibold text-sm hover:border-[#C0392B]"
              >
                <Phone className="w-4 h-4 text-[#C0392B]" />
                <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('reservations')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#C0392B] text-white font-bold text-sm tracking-wider uppercase shadow-md hover:bg-[#96281B]"
              >
                <Calendar className="w-4 h-4" />
                Reserve a Table
              </button>

              <p className="text-center text-[11px] text-stone-500 pt-2">
                824 Afterglow St · San Antonio, TX
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
