import React from 'react';
import { Leaf, Recycle, Sparkles } from 'lucide-react';

const Pillar = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl bg-[#FFFDF5] border border-[#D8C49A]/40 p-6 hover:shadow-sm transition">
    <div className="w-10 h-10 rounded-full bg-[#D8C49A]/40 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-[#A67B5B]" />
    </div>
    <h4 className="text-lg font-semibold text-[#2E2E2E]">{title}</h4>
    <p className="mt-2 text-sm text-[#2E2E2E]/80">{desc}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#FFFDF5] to-[#F7F1E3] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2E2E2E]">Inspired by nature, perfected by tradition.</h2>
          <p className="mt-4 text-[#2E2E2E]/80">
            We blend time-honored Ayurvedic recipes with mindful craftsmanship. Each small batch is made with responsibly sourced herbs and pure oils, honoring both body and earth.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pillar icon={Leaf} title="Purity" desc="Clean formulations with no harsh chemicals — only botanicals your skin understands." />
          <Pillar icon={Sparkles} title="Tradition" desc="Guided by Ayurvedic principles, balanced to support daily rituals and long-term wellness." />
          <Pillar icon={Recycle} title="Wellness" desc="Sustainable choices, thoughtful packaging, and products that care for you and nature." />
        </div>
      </div>
    </section>
  );
};

export default About;
