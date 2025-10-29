import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] font-inter">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#FFFDF5]/80 border-b border-[#D8C49A]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7A9E7E]/20"><Leaf className="w-4 h-4 text-[#7A9E7E]" /></span>
            <span className="font-semibold text-[#2E2E2E]">Ayurveda Botanica</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-[#2E2E2E]/80 hover:text-[#2E2E2E]">About</a>
            <a href="#products" className="text-[#2E2E2E]/80 hover:text-[#2E2E2E]">Products</a>
            <a href="#contact" className="text-[#2E2E2E]/80 hover:text-[#2E2E2E]">Contact</a>
            <a
              href="https://wa.me/918849209811?text=Hi,%20I'm%20interested%20in%20your%20Ayurvedic%20products."
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#7A9E7E] text-white px-4 py-2 font-medium hover:opacity-95"
            >
              Buy on WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D8C49A]/40 bg-[#FFFDF5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#2E2E2E]/70">© {new Date().getFullYear()} Ayurveda Botanica. All rights reserved.</p>
          <div className="text-sm text-[#2E2E2E]/70">Crafted with care — Purity • Tradition • Wellness</div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918849209811?text=Hi,%20I'm%20interested%20in%20your%20Ayurvedic%20products."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full shadow-lg bg-[#25D366] text-white hover:opacity-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.45 0 .1 5.35.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.63a11.9 11.9 0 005.82 1.56h.01c6.6 0 11.95-5.35 11.95-11.95 0-3.19-1.24-6.19-3.5-8.5zM12.06 22.1h-.01a10.1 10.1 0 01-5.16-1.41l-.37-.22-3.7.96.99-3.6-.24-.37A10.07 10.07 0 011.9 11.95C1.9 6.39 6.5 1.8 12.06 1.8c2.69 0 5.22 1.05 7.12 2.95a10.02 10.02 0 012.98 7.2c0 5.56-4.6 10.15-10.1 10.15zm5.6-7.57c-.31-.16-1.82-.9-2.1-1.01-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.2-.18.21-.37.23-.69.08-.31-.16-1.31-.48-2.5-1.53a9.38 9.38 0 01-1.74-2.15c-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.67-.96-2.28-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.52.07-.79.39-.27.31-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.16.21 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
