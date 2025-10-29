import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    name: 'Aloe Vera Face Cream',
    desc: 'Hydrating daily cream with cold-pressed aloe and sandalwood.',
    img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Neem & Tulsi Cleanser',
    desc: 'Purifying gel cleanser for calm, clear skin.',
    img: 'https://images.unsplash.com/photo-1611672585731-3baba4d1dd06?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Ashwagandha Body Oil',
    desc: 'Nourishing abhyanga oil to restore balance and glow.',
    img: 'https://images.unsplash.com/photo-1604589859038-3f04a62eb4f4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Turmeric Glow Mask',
    desc: 'Weekly brightening mask with wild turmeric and honey.',
    img: 'https://images.unsplash.com/photo-1615486364134-5f5b1c2082fe?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductCard = ({ item }) => {
  const waLink = `https://wa.me/918849209811?text=${encodeURIComponent(
    `Hi, I'm interested in your ${item.name}.`
  )}`;

  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-[#D8C49A]/40 hover:shadow-md transition">
      <div className="relative h-52 w-full overflow-hidden">
        <img src={item.img} alt={item.name} className="h-full w-full object-cover transform group-hover:scale-105 transition" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#2E2E2E]">{item.name}</h3>
        <p className="mt-2 text-sm text-[#2E2E2E]/80">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#7A9E7E] text-white px-4 py-2 text-sm font-medium hover:opacity-95"
          >
            <ShoppingBag className="w-4 h-4" /> Buy on WhatsApp
          </a>
          <div className="flex items-center text-[#A67B5B]">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="w-full bg-[#FFFDF5] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2E2E2E]">Featured Products</h2>
            <p className="mt-2 text-[#2E2E2E]/80">Handpicked essentials to begin or elevate your daily ritual.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-[#A67B5B] hover:underline">Need help choosing?</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#D8C49A]/30 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">Ayurvedic Ingredients</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Tulsi', benefit: 'Supports clear breathing' },
              { name: 'Neem', benefit: 'Clarifies & purifies skin' },
              { name: 'Aloe Vera', benefit: 'Cools & hydrates' },
              { name: 'Ashwagandha', benefit: 'Balances stress' },
              { name: 'Turmeric', benefit: 'Brightens & soothes' },
              { name: 'Sandalwood', benefit: 'Calms & scents' },
            ].map((herb) => (
              <div key={herb.name} className="rounded-xl bg-white/70 border border-[#D8C49A]/40 p-4">
                <p className="font-medium text-[#2E2E2E]">{herb.name}</p>
                <p className="text-sm text-[#2E2E2E]/70">{herb.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
