"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "Process" },
  { href: "#about", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61580997124511",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.9h-2.33V22c4.78-.74 8.43-4.9 8.43-9.93z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ldtech.ai/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2Zm10.25 1.65a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/[0.28] z-[9999] transition-opacity duration-[250ms] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-[290px] max-w-[82vw] h-screen bg-white/[0.98] border-r border-black/10 shadow-[18px_0_40px_rgba(0,0,0,0.10)] pt-[100px] px-6 pb-6 z-[10000] transition-transform duration-[250ms] ease-out overflow-visible md:w-[290px] md:pt-[100px] max-md:w-[260px] max-md:pt-[92px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          aria-label="Open or close menu"
          className="absolute top-0 -right-[86px] z-[10001] w-[86px] h-[86px] border border-black/10 border-l-0 bg-white/[0.98] rounded-br-[18px] flex items-center justify-center cursor-pointer shadow-[18px_0_40px_rgba(0,0,0,0.10)] p-2 overflow-hidden max-md:w-[78px] max-md:h-[78px] max-md:-right-[78px]"
        >
          <Image
            src="/ldtech-logo.png"
            alt="LDtech logo"
            width={58}
            height={58}
            className="object-contain brightness-0 saturate-100 max-md:w-[52px] max-md:h-[52px]"
          />
        </button>

        {/* Language selector */}
        <div className="flex gap-2.5 mb-5">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center text-center no-underline text-[26px] py-2.5 px-3 rounded-xl border border-black bg-white text-black transition-all duration-200 hover:bg-[#f5f5f5] hover:-translate-y-px"
            aria-label="English version"
            title="English"
          >
            🇺🇸
          </Link>
          <Link
            href="/pt"
            className="flex-1 flex items-center justify-center text-center no-underline text-[26px] py-2.5 px-3 rounded-xl border border-black bg-white text-black transition-all duration-200 hover:bg-[#f5f5f5] hover:-translate-y-px"
            aria-label="Versão em português"
            title="Português"
          >
            🇧🇷
          </Link>
        </div>

        {/* Navigation links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeSidebar}
            className="block no-underline text-black text-[19px] font-bold tracking-[-0.02em] py-3.5 border-b border-black/[0.08] hover:opacity-65"
          >
            {link.label}
          </a>
        ))}

        {/* CTA buttons */}
        <div className="mt-[22px] grid gap-3">
          <a
            href="tel:+16369426124"
            className="block w-full text-center no-underline font-bold tracking-[-0.015em] rounded-2xl py-3.5 px-4 text-lg bg-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-px"
          >
            Try the Automation
          </a>
          <a
            href="tel:+16362525071"
            className="block w-full text-center no-underline font-bold tracking-[-0.015em] rounded-2xl py-3.5 px-4 text-lg bg-black/[0.03] text-black border border-black/10 transition-transform duration-200 hover:-translate-y-px"
          >
            Call for Questions
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-3 mt-[18px]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex-1 flex items-center justify-center h-[52px] rounded-2xl bg-black/[0.03] border border-black/10 no-underline text-black font-bold hover:opacity-70"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
