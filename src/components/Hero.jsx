import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#FFFDF5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="tracking-wide uppercase text-sm text-[#A67B5B] mb-3">Rooted in nature</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#2E2E2E] leading-tight">
            Pure. Natural. Rooted in Ayurveda.
          </h1>
          <p className="mt-5 text-[#2E2E2E]/80 max-w-xl">
            Thoughtfully crafted remedies inspired by ancient wisdom and perfected for modern wellbeing. Calm, clean, and kind to your skin and the planet.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-[#7A9E7E] text-white px-6 py-3 font-medium shadow hover:opacity-95 transition">
              Explore Products
            </a>
            <a
              href="https://wa.me/918849209811?text=Hi,%20I'm%20interested%20in%20your%20Ayurvedic%20products."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-6 py-3 font-medium shadow hover:opacity-95 transition"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
        <div className="h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl bg-[#D8C49A]/40 relative shadow-inner">
          <Spline
            scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFFDF5] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
