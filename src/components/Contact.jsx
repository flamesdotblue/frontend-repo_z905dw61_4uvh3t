import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Ayurveda Inquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-t from-[#FFFDF5] to-[#F7F1E3] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2E2E2E]">Contact & Social</h2>
          <p className="mt-2 text-[#2E2E2E]/80">Have a question or need a recommendation? We’re here to help.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-[#D8C49A]/40 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-5">
              <input
                type="text"
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-[#D8C49A]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A9E7E] bg-[#FFFDF5]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-[#D8C49A]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A9E7E] bg-[#FFFDF5]"
              />
              <textarea
                required
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full rounded-md border border-[#D8C49A]/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A9E7E] bg-[#FFFDF5]"
              />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#7A9E7E] text-white px-6 py-3 font-medium hover:opacity-95">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>

          <div className="rounded-2xl bg-[#D8C49A]/30 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-[#2E2E2E]">Stay connected</h3>
            <p className="mt-2 text-[#2E2E2E]/80">DM us on WhatsApp or follow along for rituals, tips, and new product drops.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="https://wa.me/918849209811" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#2E2E2E] hover:underline">
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <a href="tel:+911234567890" className="inline-flex items-center gap-3 text-[#2E2E2E] hover:underline">
                <Phone className="w-5 h-5 text-[#7A9E7E]" /> +91 12345 67890
              </a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 text-[#2E2E2E] hover:underline">
                <Mail className="w-5 h-5 text-[#A67B5B]" /> hello@example.com
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm text-[#2E2E2E]/70">Trust badges</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-white border border-[#D8C49A]/40 px-3 py-2 text-xs">100% Natural</div>
                <div className="rounded-lg bg-white border border-[#D8C49A]/40 px-3 py-2 text-xs">Handmade</div>
                <div className="rounded-lg bg-white border border-[#D8C49A]/40 px-3 py-2 text-xs">Chemical-Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
