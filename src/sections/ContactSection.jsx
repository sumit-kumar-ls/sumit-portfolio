import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github } from 'lucide-react';
import { profileData } from '../data/profileData';

export const ContactSection = ({ githubUrl }) => {
  const [copied, setCopied] = useState(false);
  const { heading, subheading, email } = profileData.contact;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative border-t border-[#E8E2D5] bg-gradient-to-b from-[#FAF8F3] to-[#F4F0E8]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        
        {/* Contact Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2DAA8] text-xs font-mono font-medium text-[#4A5D2E] shadow-warm-sm">
          <Mail className="w-3.5 h-3.5 text-[#C86D51]" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Large Typographic Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-[#1A1918] tracking-tight leading-tight">
          Let's build <br className="hidden sm:block" />
          <span className="font-serif italic font-normal text-[#4A5D2E]">something interesting.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#5A5750] max-w-2xl mx-auto leading-relaxed font-normal">
          {subheading}
        </p>

        {/* Warm Cream Contact Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2DAA8] shadow-warm-lg max-w-2xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A857B]">Direct Email Address</span>
            <div className="text-xl sm:text-3xl font-heading font-bold text-[#1A1918] tracking-tight break-all">
              {email}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FAF8F3] hover:bg-[#F4F0E8] border border-[#E8E2D5] text-[#2C2B29] font-medium text-sm transition-all duration-300 shadow-warm-sm hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#4A5D2E]" />
                  <span className="text-[#4A5D2E] font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#5A5750]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2C2B29] hover:bg-[#4A5D2E] text-white font-medium text-sm transition-all duration-300 shadow-warm-md hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FAF8F3] hover:bg-[#F4F0E8] border border-[#E8E2D5] text-[#2C2B29] font-medium text-sm transition-all duration-300 shadow-warm-sm hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-[#5A5750]" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <div className="pt-4 border-t border-[#F0EBE1] text-xs text-[#8A857B] font-mono">
            Open for discussions, networking, and learning opportunities.
          </div>
        </div>
      </div>
    </section>
  );
};
